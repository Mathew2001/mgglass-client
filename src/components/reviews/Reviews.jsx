import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReviewsByIsApproved } from '../../redux/actions/reviewActions'
import { useEffect } from 'react'
import ReviewCard from './ReviewCard'

const Reviews = () => {
  const dispatch = useDispatch()
  const { reviewsByIsApproved } = useSelector((state) => state.reviewReducer)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    dispatch(getReviewsByIsApproved())
  }, [dispatch])

  const nextReviews = () => {
    if (currentIndex + 1 < reviewsByIsApproved.length - 2) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const previousReviews = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className="container mt-5 mb-5" dir="rtl">
      <h1 className="text-right mb-4">מה אומרים עלינו?</h1>
      {reviewsByIsApproved && reviewsByIsApproved.length > 0 ? (
        <>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 p-4 justify-content-start flex-wrap align-items-stretch">
            {reviewsByIsApproved.map((review) => (
              <ReviewCard
                key={review._id}
                userName={review.userName}
                rating={review.rating}
                content={review.content}
              />
            ))}
          </div>
          {reviewsByIsApproved.length > 2 ? (
            <div className="d-block d-md-none">
              <button className="btn btn-primary" onClick={previousReviews}><i class="bi bi-arrow-right-circle-fill"></i></button>
              <button className="btn btn-primary" onClick={nextReviews}><i class="bi bi-arrow-left-circle-fill"></i></button>
            </div>
          ) : null}
        </>
      ) : (
        <h1>לא נמצאו תגובות</h1>
      )}
    </div>
  )
}

export default Reviews