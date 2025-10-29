import React from 'react'

const ReviewCard = ({ userName, rating, content }) => {
  return (
    <div className="col" style={{ height: '250px' }}>
      <div className="card bg-dark text-white h-100">
        <div className="card-body">
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
          <p className="card-text text-white ">{content}</p>
          <h1 className="card-title h5 text-white">{userName}</h1>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard