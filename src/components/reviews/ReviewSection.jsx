import NewReview from "./NewReview";
import { useState ,useTransition} from "react";
import { useTranslation } from "react-i18next";


const ReviewSection = () => {
  const [showNewReview, setShowNewReview] = useState(false);
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const handleShow = () => setShowNewReview(true);
  const handleClose = () => setShowNewReview(false);
  const reviewButtonText = t('addReview')

  return (
    <>
      <div className="d-flex justify-content-between align-items-center" dir={dir}>
        <div className="">
          <button className="btn btn-primary" onClick={handleShow} dir={dir}>
            {reviewButtonText}
          </button>
        </div>
      </div>
      {showNewReview && (
        <div
          className="modal show fade"
          dir={dir}
          tabIndex="-1"
          style={{
            display: "block",
            background: "rgba(0,0,0,0.5)",
            zIndex: 1050,
          }}
          onClick={handleClose}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <div className="d-flex justify-content-between align-items-center w-100">
                  {/* Place the X button on the left */}
                  <div>
                    <button
                      type="button"
                      className="btn-close ms-0"
                      aria-label="Close"
                      onClick={handleClose}
                      dir={dir}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-body" style={{maxHeight: "80vh", overflowY: "auto"}} dir={dir}>
                <NewReview />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewSection;