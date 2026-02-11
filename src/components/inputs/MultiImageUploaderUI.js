// MultiImageUploaderUI.jsx
import React from "react";
import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/solid";

/**
 * MultiImageUploaderUI (UI only)
 * Expects images as array of:
 *  - { image: string, public_id?: string }
 *  - OR string URL
 *
 * Props:
 * - title: string
 * - images: array
 * - max: number
 * - isUploading: boolean
 * - onAdd: (event) => void        // input onChange
 * - onRemove: (index) => void
 * - onClear: () => void
 */
const MultiImageUploaderUI = ({
  title = "תמונות",
  images = [],
  max = 5,
  isUploading = false,
  onAdd,
  onRemove,
  onClear,
  error,
}) => {
  const count = images?.length || 0;
  const disabledAdd = isUploading || count >= max;

  return (
    <div className="w-100 text-end">
      <div className="d-flex align-items-center justify-content-between mb-2">
        <label className="fs-6 fw-medium text-secondary m-0">
          {title} ({count}/{max})
        </label>

        <div className="d-flex gap-2">
          {count > 0 && (
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={onClear}
              disabled={isUploading}
            >
              נקה הכל
            </button>
          )}

          <label
            className={`btn btn-sm btn-primary ${disabledAdd ? "disabled" : ""}`}
            style={{ backgroundColor: "#AED135", border: "none" }}
          >
            {isUploading ? "מעלה..." : "הוסף תמונות"}
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={onAdd}
              disabled={disabledAdd}
              style={{ display: "none" }}
            />
          </label>
        </div>
      </div>

      <div
        className="border border-2 border-dashed rounded-3 p-4 bg-white text-center"
        style={{
          borderColor: "#AED135",
          transition: "all 300ms",
        }}
      >
        <PhotoIcon
          className="mx-auto"
          style={{ height: "3rem", width: "3rem", color: "#0d6efd" }}
          aria-hidden="true"
        />
        <div className="mt-3">
          <p className="m-0 fw-medium">
            {disabledAdd ? "הגעת למקסימום תמונות" : "בחר תמונות להעלאה"}
          </p>
          <p className="mt-2 text-muted fs-6">אפשר לבחור כמה תמונות יחד</p>
          <p className="mt-1 text-muted small">PNG, JPG, GIF עד 10MB</p>
        </div>

        {isUploading && (
          <div className="mt-3">
            <div className="progress" style={{ height: "0.625rem" }}>
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={{ width: "60%", backgroundColor: "#AED135" }}
              />
            </div>
            <p className="mt-2 text-muted fs-6">מעלה תמונות...</p>
          </div>
        )}
      </div>

      {count > 0 && (
        <div className="mt-4 row row-cols-3 g-3">
          {images.map((img, index) => {
            const src = typeof img === "string" ? img : img?.image;

            return (
              <div key={(img?.public_id || src || index) + index} className="col">
                <div
                  className="position-relative rounded shadow-sm overflow-hidden"
                  style={{ height: "10rem" }}
                >
                  <img
                    src={src}
                    alt={`תמונה ${index + 1}`}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />

                  <button
                    type="button"
                    onClick={() => onRemove(index)}
                    className="btn btn-danger btn-sm position-absolute rounded-circle"
                    style={{
                      top: "0.5rem",
                      left: "0.5rem",
                      width: "2rem",
                      height: "2rem",
                      padding: 0,
                      display: "grid",
                      placeItems: "center",
                    }}
                    disabled={isUploading}
                    aria-label="Remove image"
                    title="Remove"
                  >
                    <XMarkIcon style={{ height: "1rem", width: "1rem" }} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {error && (
        <div className="invalid-feedback d-block">
          {error.message || "שדה חובה"}
        </div>
      )}
    </div>
  );
};

export default MultiImageUploaderUI;
