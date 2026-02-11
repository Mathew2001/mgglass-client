import React from "react";

const TextArea = ({
  register,
  label,
  name,
  placeholder,
  rules = {},
  errors,
  rows = 5,
  maxLength = 2000,
  dir = "rtl",
}) => {
  const error = name
    .split('.')
    .reduce((obj, key) => obj?.[key], errors);
  return (
    <div className="mb-3">
      {label && (
        <label
          htmlFor={name}
          className="form-label fw-medium"
        >
          {label}
        </label>
      )}
      <textarea
        id={name}
        maxLength={maxLength}
        rows={rows}
        name={name}
        placeholder={placeholder}
        {...register(name, rules)}
        className={`form-control${error ? " is-invalid" : ""}`}
        style={{ resize: "none", minHeight: "10rem", width: "100%"}}
        dir={dir}
      />
      {error && (
        <div className="invalid-feedback d-block">
          {error.message || "שדה חובה"}
        </div>
      )}
    </div>
  );
};

export default TextArea;
