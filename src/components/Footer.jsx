import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../const'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-end">
            <h5>ניווט מהיר</h5>
            <ul className="list-unstyled">
              <li><Link to={ROUTES.HOME} className="text-light text-decoration-none">דף הבית</Link></li>
              <li><Link to={ROUTES.MECKLAHONS} className="text-light text-decoration-none">מקלחונים</Link></li>
              <li><Link to={ROUTES.PROGLOT} className="text-light text-decoration-none">פרגולות</Link></li>
              <li><Link to={ROUTES.MAKOT} className="text-light text-decoration-none">מעקות</Link></li>
              <li><Link to={ROUTES.CONTACT_US} className="text-light text-decoration-none">צור קשר</Link></li>
            </ul>
          </div>
          <div className="col-md-4 text-end">
            <h5>שעות פעילות</h5>
            <p>שני - שישי: 8:00 - 17:00</p>
            <p>שבת: 8:00 - 14:00</p>
            <p>ראשון: סגור</p>
          </div>
          <div className="col-md-4 text-end">
            <h5>צור קשר</h5>
            <p>טלפון: 052-4421044</p>
            <p>כתובת: מעיליא, אזור הצפון</p>
            <p>דוא"ל: glassmilya@gmail.com</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">© {new Date().getFullYear()} זכוכית מעיליא. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer