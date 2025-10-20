import React from 'react'
import { Link } from 'react-router-dom'

const HomeCards = ({title, description, image, link}) => {
  return (
    <div className="card shadow-sm">
      <div className="row g-0">
        <div className="col-12 col-md-8 col-xl-6">
          <div className="card-body position-relative">
            <h3 className="card-title mb-4">{title}</h3>
            <p className="card-text">{description}</p>
            {/* Mobile: normal flow so it never gets clipped */}
            <div className="d-md-none mt-3">
              <Link to={link} className="btn btn-primary btn-sm">
                לצפייה ב{title}
              </Link>
            </div>

            {/* md+ : pin to the card corner */}
            <div className="d-none d-md-block bottom-0 end-0 p-3">
              <Link to={link} className="btn btn-primary btn-sm">
                לצפייה ב{title}
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 col-xl-6">
          {/* Mobile only: keep a nice aspect ratio */}
          <div className="ratio ratio-16x9 d-md-none">
            <img
              src={image}
              alt={title}
              className="w-100 h-100 object-fit-cover"
            />
          </div>

          {/* md+ : fill the whole column height */}
          <div className="ratio ratio-lg-1x1 d-none d-md-block h-100">
            <img
              src={image}
              alt={title}
              className="w-100 h-100 object-fit-cover"
              style={{ display: 'block' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCards