import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReviewsByIsApproved } from '../../redux/actions/reviewActions'
import { useEffect } from 'react'
import ReviewCard from './ReviewCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../css/swiperCss.css';
import SwiperItems from '../SwiperItems'

import { useTranslation } from 'react-i18next'
const Reviews = () => {
  const dispatch = useDispatch()
  const { reviewsByIsApproved } = useSelector((state) => state.reviewReducer)
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const reviewsTitle = t('reviewsTitle')

  useEffect(() => {
    dispatch(getReviewsByIsApproved())
  }, [dispatch])



  return (
    <div className="container mt-5 mb-5" dir={dir}>
      <h1 className="text-right mb-4">{reviewsTitle}</h1>
      {/* {reviewsByIsApproved && reviewsByIsApproved.length > 0 ? (
        <div className="position-relative">
          <Swiper
            className='reviews-swiper'
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next'
            }}
          >
            {reviewsByIsApproved.map((review) => (
              <SwiperSlide key={review._id} >
                <ReviewCard
                  userName={review.userName}
                  rating={review.rating}
                  content={review.content}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev" ></div>
          <div className="swiper-button-next"></div>
        </div>
      ) : (
    <h1>לא נמצאו תגובות</h1>
  )} */}
  <SwiperItems items={reviewsByIsApproved} renderItems={(item) => (
    <ReviewCard key={item?._id} userName={item?.userName} rating={item?.rating} content={item?.content} />
  )} />
</div>
)
}

export default Reviews;