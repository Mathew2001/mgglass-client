// Breadcrumbs.jsx
import { Link } from "react-router-dom";

/**
 * Props:
 * - pathString: a string like "דף הבית / פרגולות / הצללה"
 * - routeMap: { [label]: path } e.g. { "דף הבית": ROUTES.HOME, "פרגולות": "/pergolas" }
 * - separator: what to display between items (default " / ")
 * - wrapClass: extra classes for the outer div (Bootstrap-friendly)
 */
function LinkPaths({
  pathString,
  routeMap = {},
  separator = " / ",
  wrapClass = ""
}) {
  // Split by "/" (not spaces), trim, and remove empties
  const parts = String(pathString || "")
    .split("/")
    .map(s => s.trim())
    .filter(Boolean);

  return (
    <div className={`col-12 text-center text-warning ${wrapClass}`}>
      <p className="text-center m-0">
        {parts.map((label, idx) => {
          const isLast = idx === parts.length - 1;
          const to = routeMap[label]; // optional mapping label -> route
          return (
            <>
            <span key={idx}>
              {isLast || !to ? (
                // last item (active) or no route -> plain bold text
                <span className="text-warning fw-bold">{label}</span>
              ) : (
                <Link to={to} className="text-muted text-decoration-none">
                  {label}
                </Link>
              )}
              {!isLast && <span>{separator}</span>}
            </span>
            </>
          );
        })}
      </p>
    </div>
  );
}

export default LinkPaths