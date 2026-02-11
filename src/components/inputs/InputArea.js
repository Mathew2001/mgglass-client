
import React from "react";

function InputArea({
  label,
  name,
  register,
  errors,
  rules = {},
  type = "text",
  placeholder = "",
  dir = "rtl",
}) {
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

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={`form-control${error ? " is-invalid" : ""}`}
        {...register(name, rules)}
        dir={dir}
      />

      {error && (
        <div className="invalid-feedback d-block">
          {error.message || "שדה חובה"}
        </div>
      )}
    </div>
  );
}

export default InputArea;

