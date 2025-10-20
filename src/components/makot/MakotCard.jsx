import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MakotCard = ({name, description, imageGallery, id , link}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const nextImage = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((prevIndex) => 
      prevIndex === imageGallery.length - 1 ? 0 : prevIndex + 1
    )
  }

  const previousImage = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? imageGallery.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="col">
    <div className="card h-100">
      <Link key={id} to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card-body">
        <h1 className="card-title h4 mb-3">{name}</h1>
      </div>
      {/* <div className="position-relative" style={{height: '250px'}}>
        <img 
          src={imageGallery[currentImageIndex]}
          alt={name}
          className="w-100 h-100"
          style={{objectFit: 'cover'}}
        />
        {imageGallery.length > 1 && (
          <>
            <button
              className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-2"
              onClick={nextImage}
              style={{ opacity: 0.8, fontSize: '24px', zIndex: 2 }}
            >
              &#8249;
            </button>
            <button 
              className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-2" 
              onClick={previousImage}
              style={{opacity: 0.8, fontSize: '24px', zIndex: 2}}
            >
              &#8250;
            </button>
          </>
        )}
      </div> */}
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            {imageGallery.map((image, index) => (
              <div key={index} className={`carousel-item ${index === currentImageIndex ? 'active' : ''}`}>
                <img src={image} className="d-block w-100" alt={name} />
              </div>
            ))}
          </div>
          {imageGallery.length > 1 && (
            <>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={previousImage}>
            <i className="bi bi-arrow-left-circle-fill fs-3 text-dark"></i>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={nextImage}>
            <i className="bi bi-arrow-right-circle-fill fs-3 text-dark"></i>
            <span className="visually-hidden">Next</span>
          </button>
            </>
          )}
        </div>
      <div className="card-body">
           <p className="card-text text-muted mb-0" style={{fontSize: '1.1rem'}}>{description}</p>
        </div>
      </Link>
    </div>
    </div>
  )
}

export default MakotCard