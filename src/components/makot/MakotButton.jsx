import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../const'

const MakotButton = () => {

  return (
    <div className="position-relative">
      <Link
        to={ROUTES.MAKOT}
        className="btn btn-light px-4"
      >
        מעקות
      </Link>
    </div>
  )
}

export default MakotButton