
import { useState } from "react";
import { Controller } from "react-hook-form";
import imageServices from "../../redux/services/imageServices";
import MultiImageUploaderUI from "./MultiImageUploaderUI"; // grid + input + remove

const MultiImageUploader = ({
  name,
  control,
  title = "תמונות",
  max = 5,
  rules = {},
}) => {
  const [isUploading, setIsUploading] = useState(false);

  const uploadImageToServer = async (files) => {
    const formData = new FormData();
    files.forEach(file => {
      formData.append("images", file);
    });
    const response = await imageServices.addMultipleImages(formData); // expected: { image, public_id }
    return response;
  };

  const handleFilesChange = async (e, field) => {

    const files = Array.from(e.target.files || []);

    if(files.length + (field.value?.length || 0) > max) 
      return (alert(`ניתן להעלות עד ${max} תמונות`));

    setIsUploading(true);
    try {
      const uploadedList = await uploadImageToServer(files);

      const validField = field.value ? field.value : [];
      field.onChange([...validField, ...uploadedList]);
    } finally {
      setIsUploading(false);
      e.target.value = ""; // allow choosing same files again
    }
  };

  const removeAt = (index, field) => {
    const current = Array.isArray(field.value) ? field.value : [];
    field.onChange(current.filter((_, i) => i !== index));
    imageServices.deleteImage(field.value[index]?.public_id);
  };

  const clearAll = (field) => {
    field.value.forEach((item) => imageServices.deleteImage(item.public_id));
    field.onChange([]);
  };

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      defaultValue={[]}
      render={({ field, fieldState }) => (
        <MultiImageUploaderUI
          title={title}
          images={field.value} // [{image, public_id}]
          max={max}
          isUploading={isUploading}
          onAdd={(e) => handleFilesChange(e, field)}
          onRemove={(index) => removeAt(index, field)}
          onClear={() => clearAll(field)}
          error={fieldState.error}
        />
      )}
    />
  );
};

export default MultiImageUploader;

