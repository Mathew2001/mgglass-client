import { Controller } from "react-hook-form";

const Stars = ({ className = "", control, errors, rules, name, label }) => {
  return (
    <div className={`mb-3 ${className}`}>
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={0}
        render={({ field }) => {
          const rating = Number(field.value || 0);

          const setRating = (value) => {
            field.onChange(value);
          };

          return (
            <>
              <div className="star-rating d-flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onBlur={field.onBlur}
                    aria-label={`${star} stars`}
                    className="p-0 border-0 bg-transparent"
                    style={{
                      cursor: "pointer",
                      fontSize: "2rem",
                      color: star <= rating ? "#ffd700" : "#e4e5e9",
                      lineHeight: 1,
                    }}
                  >
                    ★
                  </button>
                ))}
              </div>

              {/* hidden input so RHF fully tracks it */}
              <input type="hidden" value={rating} {...field} />
            </>
          );
        }}
      />

      {errors?.[name] && (
        <small className="text-danger">{errors[name].message}</small>
      )}
    </div>
  );
};

export default Stars;
