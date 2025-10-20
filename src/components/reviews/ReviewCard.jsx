import React from 'react'

const ReviewCard = ({ userName, rating, content }) => {
  return (
    <div className="col">
      <div className="card bg-dark text-white mt-3 h-100" >
        <div className="card-body">
          <div className="d-flex align-items-center mb-2">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                style={{
                  color: index < rating ? '#ffd700' : '#e4e5e9',
                  fontSize: '1.2rem'
                }}
              >
                ★
              </span>
            ))}
          </div>
          <p className="card-text text-white">{content}</p>
          <h1 className="card-title h5 mb-2 text-white">{userName}</h1>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard