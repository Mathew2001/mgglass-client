import React from 'react'

const ReviewCard = ({ userName, rating, content }) => {
  return (
    <div className="col p-2">
      <div className="card bg-light text-dark h-100 shadow">
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
          <p className="card-text text-dark ">{content}</p>
          <h1 className="card-title h5 text-dark">{userName}</h1>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard