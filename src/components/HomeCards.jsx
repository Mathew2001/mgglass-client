import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../../src/css/swiperCss.css'
const HomeCards = ({title, description, image, link}) => {
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const view = t('view')
  return (
    <div className="col col-md-10 mx-auto">
      <Link to={link} style={{ textDecoration: 'none' }}>
      <div className="card h-100 text-white home-card-hover">
        <img src={image} alt={title} className="card-img home-image home-card-img" />
        <div className="card-img-overlay home-card-overlay">
          <h3 className="card-title home-card-title">{title}</h3>
          {/* <p className="card-text">{description}</p> */}
        </div>
      </div>
      </Link>
    </div>
  )
}

export default HomeCards