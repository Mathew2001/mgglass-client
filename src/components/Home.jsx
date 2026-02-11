import React, { useState, useEffect } from 'react'
import ROUTES from '../const'
import HomeCards from './HomeCards'
import '../../src/css/swiperCss.css'
import { useTranslation } from 'react-i18next'
import WhyUs from './WhyUs'
import Reviews from './reviews/Reviews'
import ReviewSection from './reviews/ReviewSection'
import { useSelector, useDispatch } from 'react-redux'
import {getPageBySlug} from '../redux/actions/PageActions'
import { PAGES_SLUGS } from '../const'
const Home = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const { pageBySlug } = useSelector((state) => state.pageReducer)
  const {business} = useSelector((state) => state.businessReducer)

  useEffect(() => {
    dispatch(getPageBySlug(PAGES_SLUGS.HOME))
  }, [dispatch])

  if(!pageBySlug) return <div>Loading...</div>

  const sectionsFunction = (sections) => {
    const sectionsArr = sections.map((section, index) => (
    {
    order: index + 1,
    title: section.title[i18n.language],
    text: section.data.text[i18n.language],
    images: section.data.images,
  }))
  return sectionsArr
}

  const sectionsObject = sectionsFunction(pageBySlug.sections)


  return (
    <div>
      <div className="card">
      <img src={sectionsObject[0].images[0]?.image} alt={sectionsObject[0].title} className="header-image"/>
      <div className="card-img-overlay text-center text-white">
        <div className="position-absolute top-50 start-50 translate-middle">
        <h1 className="display-3 mb-4">{business?.businessName}</h1>
            {sectionsObject[0] && sectionsObject[0]?.text?.split('\n').map((text) => (
              <p className="lead mb-0 text-hero" key={text}>{text}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-lg-3 m-2">
        <HomeCards title={sectionsObject[1].title} description={sectionsObject[1].text} image={sectionsObject[1].images[0]?.image} link={ROUTES.MECKLAHONS} />
        <HomeCards title={sectionsObject[2].title} description={sectionsObject[2].text} image={sectionsObject[2].images[0]?.image} link={ROUTES.PROGLOT} />
        <HomeCards title={sectionsObject[3].title} description={sectionsObject[3].text} image={sectionsObject[3].images[0]?.image} link={ROUTES.MAKOT} />
      </div>

      <WhyUs section5={sectionsObject[4]}/>

      <div className="col-12 mt-2">
       <div className="card h-100 text-white text-center">
        <img src={sectionsObject[5].images[0]?.image} alt={sectionsObject[5].title} className="about-us-image" />
        <div className="card-img-overlay col-12 col-md-6 mx-auto" style={{ backgroundColor: 'rgba(0, 0, 0, 0.13)' }}>
          <div className={`position-absolute top-50 start-50 translate-middle`}>
            <h3 className="card-title">{sectionsObject[5].title}</h3>
            {sectionsObject[5].text.split('\n').map((text) => (
              <p className="card-text mb-0 card-text-about-us" key={text}>{text}</p>
            ))}
          </div>
        </div>
       </div>
      </div>

      <div className="container mt-5">
        <ReviewSection />
        <Reviews />
      </div>
    </div>
  )
}

export default Home