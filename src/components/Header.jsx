import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../const'
import PergolaButton from './pergolot/PergolaButton'
import MeklahonButton from './meklahon/MeklahonButton'
import MakotButton from './makot/MakotButton'
import { useTranslation } from 'react-i18next'
import LanguageSelector from '../assets/translate/languageSelector'
import logo from '../assets/pictures/lang/israel.png'
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()

  const businessName = t('businessName')
  const address = t('address')
  const homePage = t('homePage')
  const pergolas = t('pergolas')
  const showers = t('showers')
  const railings = t('railings')
  const contactUs = t('contactUs')
  return (
    <>
    
      <div className="navbar navbar-expand-xl bg-secondary-subtle fixed-top shadow-sm px-2 px-lg-5 py-3 py-lg-4" dir={dir}>


        {/* Logo and contact info */}
        <div className="d-flex align-items-center gap-2 gap-xl-3 mb-1 mb-xl-2" dir={dir}>
          <div className="position-relative" style={{ width: '50px', height: '50px' }}>
            <img src={logo} alt="logo" className="w-100 h-100" />
          </div>
          <div >
            <h1 className="h5 h4-lg m-0 text-dark">
              {businessName}
            </h1>
            <div className="small text-muted" dir={dir}>
              <div className="fs-7 fs-6-xl">052-4421044 📞</div>
              <div className="fs-7 fs-6-xl">{address} 📍</div>
            </div>
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
              {homePage}
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
              {contactUs}
            </Link>
          </div>
        </div>
        <div className="d-none d-xl-block">
          <LanguageSelector />
        </div>
        <div className="d-xl-none d-flex gap-3">
          <LanguageSelector />
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
        className={`d-xl-none position-fixed top-0 end-0 h-100 bg-white shadow-lg p-4 ${isSidebarOpen ? 'translate-start-0' : 'translate-end-100'
          }`}
        style={{
          width: 280,
          zIndex: 1045,
          transform: isSidebarOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform .3s ease-in-out',
        }}
        dir={dir}
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
              {homePage}
            </Link>
          </div>
          <div className="position-relative">
            <Link
              to={ROUTES.PROGLOT}
              className="btn btn-light px-4"
              onClick={() => setIsSidebarOpen(false)}
            >
              {pergolas}
            </Link>
          </div>
          <div className="position-relative">
            <Link
              to={ROUTES.MECKLAHONS}
              className="btn btn-light px-4"
              onClick={() => setIsSidebarOpen(false)}
            >
              {showers}
            </Link>
          </div>
          <div className="position-relative">
            <Link
              to={ROUTES.MAKOT}
              className="btn btn-light px-4"
              onClick={() => setIsSidebarOpen(false)}
            >
              {railings}
            </Link>
          </div>
          <div className="position-relative">
            <Link
              to={ROUTES.CONTACT_US}
              className="btn btn-light px-4"
              onClick={() => setIsSidebarOpen(false)}
            >
              {contactUs}
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