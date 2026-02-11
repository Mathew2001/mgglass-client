import { useFieldArray, Controller } from "react-hook-form";
import InputArea from "./InputArea";
import TextArea from "./TextArea";
import MultiImageUploader from "./MultiImageUploader";
import { REGEX } from '../../const'
function SectionsEditor({ control, register, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "sections",
  });
  
  return (
    <div className="col-12">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h3 className="h5 fw-bold mb-0">Sections</h3>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() =>
            append({ title: { he: "", en: "" }, order: fields.length + 1, data: { text: { he: "", en: "" },images: null}})
          }
        >
          + Add Section
        </button>
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className="mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
              <span>{`פסקה ${index + 1}`}</span>
              <button className="btn btn-danger" onClick={() => remove(index)}>מחק</button>
            </div>
            <div className="card-body">
              <div className="row g-3 d-flex justify-content-between align-items-center flex-wrap">
                <div className="row">
                <div className="col-lg-6 col-12">
                  <InputArea
                    register={register}
                    name={`sections.${index}.title.he`}
                    label="כותרת בעברית"
                    errors={errors}
                    rules={{
                      required: true,
                      pattern: {
                        value: REGEX.HEBREW_REGEX,
                        message: 'נא להזין טקסט בעברית בלבד',
                      },
                    }}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputArea
                    register={register}
                    name={`sections.${index}.title.en`}
                    label="כותרת באנגלית"
                    errors={errors}
                    rules={{
                      required: true,
                      pattern: {
                        value: REGEX.ENGLISH_REGEX,
                        message: 'נא להזין טקסט באנגלית בלבד',
                      },
                    }}
                    dir="ltr"
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <TextArea
                    register={register}
                    name={`sections.${index}.data.text.he`}
                    label="טקסט בעברית"
                    errors={errors}
                    rules={{
                      required: true,
                      pattern: {
                        value: REGEX.HEBREW_REGEX,
                        message: 'נא להזין טקסט בעברית בלבד',
                      },
                    }}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <TextArea
                    register={register}
                    name={`sections.${index}.data.text.en`}
                    label="טקסט באנגלית"
                    errors={errors}
                    rules={{
                      required: true,
                      pattern: {
                        value: REGEX.ENGLISH_REGEX,
                        message: 'נא להזין טקסט באנגלית בלבד',
                      },
                    }}
                    dir="ltr"
                  />
                </div>
                </div>
                  <div className="col-12 ">
                    <MultiImageUploader name={`sections.${index}.data.images`} control={control} />
                  </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SectionsEditor;