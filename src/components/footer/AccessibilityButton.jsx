import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../const'

const AccessibilityButton = () => {
  return (
    <div className="position-fixed bottom-0 start-0 m-3 mb-5">
      <Link to={ROUTES.ACCESSIBILITY_STATEMENT} className="text-light text-decoration-none position-fixed bottom-0 start-0 m-3 mb-5">
        <span className="text-primary fw-bold fs-1"><i className="bi bi-universal-access-circle"></i></span>
      </Link>
    </div>
  )
}
export default AccessibilityButton