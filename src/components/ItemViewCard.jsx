import React from 'react'

const ItemViewCard = ({ imageGallery, currentImageIndex, setCurrentImageIndex, name, description }) => {
  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex === 0 ? imageGallery.length - 1 : prevIndex - 1)
  }
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex === imageGallery.length - 1 ? 0 : prevIndex + 1)
  }
  return (
    <div className="col-12 col-md-8 col-lg-6 col-xl-5 mx-auto mb-2">
      <div className="card h-100 align-items-center justify-content-center">
        <div className="card-body">
          <h1 className="card-title h4 mb-3">{name}</h1>
        </div>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            {imageGallery.map((image, index) => (
              <div key={index} className={`carousel-item ${index === currentImageIndex ? 'active' : ''}`} style={{ height: '300px' }}>
                <img src={image} className="d-block w-100 h-100" style={{ objectFit: 'cover'}} alt={name} />
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
          <p className="card-text text-muted mb-0" style={{ fontSize: '1.1rem' }}>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemViewCard