import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../const'

const PergolaButton = () => {
  return (
    <div className="position-relative">
      <Link
        to={ROUTES.PROGLOT}
        className="btn btn-light px-4"
      >
        פרגולות
      </Link>
    </div>
  )
}

export default PergolaButton