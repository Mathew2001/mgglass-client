// SelectorInput.jsx
import React from "react";

/**
 * SelectorInput
 * - Works with react-hook-form `register`
 * - Renders a <select> from items
 *
 * Props:
 * - name: string (field name)
 * - label: string
 * - register: RHF register function
 * - items: array of strings OR array of objects
 * - valueKey: string (when items are objects)
 * - labelKey: string (when items are objects)
 * - placeholder: string
 * - required: boolean | string
 * - disabled: boolean
 * - className: string
 * - error: RHF error message/string (optional)
 */
const SelectorInput = ({
  name,
  label,
  register,
  items = [],
  valueKey = "_id",
  labelKey = "name",
  language = "he",
  placeholder = "Select...",
  className = "",
  errors,
  rules = {},
}) => {

  return (
    <div className={`w-100 ${className}`}>
      {label && (
        <label htmlFor={name} className="d-block mb-2 fw-medium text-secondary">
          {label}
        </label>
      )}

      <select
        id={name}
        className={`form-select ${errors?.[name] ? "is-invalid" : ""}`}
        {...register(name, rules)}
        defaultValue=""
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {items.length > 0 && items.map((item, idx) => {
          const value = item?.[valueKey];
          const text = item?.[labelKey]?.[language];

          return (
            <option key={`${value}-${idx}`} value={value}>
              {text}
            </option>
          );
        })}
      </select>

      {errors?.[name] && <div className="invalid-feedback d-block">{errors?.[name].message || "שדה חובה"}</div>}
    </div>
  );
};

export default SelectorInput;
