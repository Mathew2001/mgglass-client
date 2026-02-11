import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../../css/swiperCss.css'

const MeklahonCard = ({name, description, imageGallery, id , link, type}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])
  
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
    <div ref={cardRef} className={`col-12 ${isVisible ? 'pergola-card-animate' : ''}`}>
      <div className="card h-100">
      <Link key={id} to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              {type === 'array' && imageGallery?.length ? imageGallery?.map((image, index) => (
                <div key={index} className={`carousel-item ${index === currentImageIndex ? 'active' : ''}`} style={{height: '300px'}}>
                  <img src={image.image} className="card-img d-block w-100 h-100" style={{objectFit: 'cover'}} alt={name} />
                </div>
              )) : type === 'object' && imageGallery?.image ? <div className="carousel-item active" style={{height: '300px'}}>
                <img src={imageGallery?.image} className="card-img d-block w-100 h-100" style={{objectFit: 'cover'}} alt={name} />
              </div> : null}
            </div>
            {type === 'array' && imageGallery?.length > 1 && (
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
        <div
            className="card-img-overlay card-img-overlay-out d-flex justify-content-center align-items-end"
            >
            <div
              className="w-100 text-center card-img-overlay-text"
            >
              <h1 className="card-title h4 mb-0 text-white">{name}</h1>
            </div>
          </div>       
        </Link>
      </div>
    </div>
  )
}

export default MeklahonCard