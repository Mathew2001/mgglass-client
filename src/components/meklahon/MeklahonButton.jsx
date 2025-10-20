import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../const'

const MeklahonButton = () => {
  return (
    <div className="position-relative">
      <Link
        to={ROUTES.MECKLAHONS}
        className="btn btn-light px-4"
      >
        מקלחונים
      </Link>
    </div>
  )
}

export default MeklahonButton