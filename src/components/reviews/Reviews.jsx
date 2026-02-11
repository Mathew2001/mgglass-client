import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReviewsByIsApproved } from '../../redux/actions/reviewActions'
import { useEffect } from 'react'
import ReviewCard from './ReviewCard'
import SwiperItems from '../SwiperItems'
import { useTranslation } from "react-i18next";

const Reviews = () => {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const { reviewsByIsApproved } = useSelector((state) => state.reviewReducer)
  const reviewsTitle = t('reviewsTitle')
  useEffect(() => {
    dispatch(getReviewsByIsApproved())
  }, [dispatch])



  return (
    <div className="" dir={dir}>
      {reviewsByIsApproved.length > 0 && (
        <>
          <h1 className="text-right mb-4" dir={dir}>{reviewsTitle}</h1>
          <SwiperItems items={reviewsByIsApproved} renderItems={(item) => (
            <ReviewCard key={item?._id} userName={item?.userName} rating={item?.rating} content={item?.content} />
          )} />
        </>
      )}
    </div>
  )
}

export default Reviews;