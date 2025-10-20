import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../const'
import PergolaButton from './pergolot/PergolaButton'
import MeklahonButton from './meklahon/MeklahonButton'
import MakotButton from './makot/MakotButton'

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="navbar navbar-expand-xl bg-secondary-subtle fixed-top shadow-sm px-2 px-lg-5 py-3 py-lg-4" dir="rtl">
      

        {/* Logo and contact info */}
        <div>
          <div className="d-flex align-items-center gap-2 gap-xl-3 mb-1 mb-xl-2">
            <h1 className="h5 h4-lg m-0 text-dark">
              זכוכית מעיליא
            </h1>
          </div>
          <div className="small text-muted text-end">
            <div className="fs-7 fs-6-xl">052-4421044 📞</div>
            <div className="fs-7 fs-6-xl">מעיליא, אזור הצפון 📍</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="d-none d-xl-flex align-items-center gap-3 mx-auto">
          <div className="position-relative">
            <Link
              to={ROUTES.HOME}
              className="btn btn-light px-4"
              onClick={() => setIsSidebarOpen(false)}
            >
              דף הבית
            </Link>
          </div>
          <PergolaButton />
          <MeklahonButton />
          <MakotButton />
          <div className="position-relative">
            <Link
              to={ROUTES.CONTACT_US}
              className="btn btn-light px-4"
              onClick={() => setIsSidebarOpen(false)}
            >
              צור קשר
            </Link>
          </div>
        </div>

        {/* Contact button
        <div className="position-relative">
          <Link
            to={ROUTES.CONTACT_US}
            className="btn btn-light px-4"
            onClick={() => setIsSidebarOpen(false)}
          >
            פנה אלינו
          </Link>
        </div> */}
        {/* Hamburger menu button - only visible on mobile */}
        <div className="d-xl-none">
          <button
            className="btn btn-outline-dark"
            onClick={() => setIsSidebarOpen(true)}
          >
            <i className="bi bi-layout-text-sidebar fs-4"></i>
          </button>
        </div>
      </div>


      {/* Mobile Sidebar - only visible on mobile */}
      <div 
        className={`d-xl-none position-fixed top-0 end-0 h-100 bg-white shadow-lg p-4 ${
          isSidebarOpen ? 'translate-start-0' : 'translate-end-100'
        }`} 
        style={{
          width: 280,
          zIndex: 1045,
          transform: isSidebarOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform .3s ease-in-out',
        }}
        dir="rtl"
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button 
            className="btn btn-outline-dark btn-sm"
            onClick={() => setIsSidebarOpen(false)}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="d-flex flex-column gap-3">
          <div className="position-relative">
          <Link 
            to={ROUTES.HOME}
            className="btn btn-light px-4"
            onClick={() => setIsSidebarOpen(false)}
          >
            דף הבית
          </Link>
          </div>
          <div className="position-relative">
            <Link
              to={ROUTES.PROGLOT}
              className="btn btn-light px-4"
              onClick={() => setIsSidebarOpen(false)}
            >
              פרגולות
            </Link>
          </div>
          <div className="position-relative">
            <Link
              to={ROUTES.MECKLAHONS}
              className="btn btn-light px-4"
              onClick={() => setIsSidebarOpen(false)}
            >
              מקלחונים
            </Link>
          </div>
          <div className="position-relative">
            <Link
              to={ROUTES.MAKOT}
              className="btn btn-light px-4"
              onClick={() => setIsSidebarOpen(false)}
            >
              מעקות
            </Link>
          </div>
          <div className="position-relative">
          <Link 
            to={ROUTES.CONTACT_US}
            className="btn btn-light px-4"
            onClick={() => setIsSidebarOpen(false)}
          >
            צור קשר
          </Link>
          </div>
        </div>
      </div>

      {/* Mobile Overlay - only visible when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="d-xl-none position-fixed top-0 start-0 w-100 h-100 bg-dark"
          style={{
            zIndex: 1040,
            opacity: '0.5',
            transition: 'opacity 0.3s ease-in-out'
          }}
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  )
}

export default Header