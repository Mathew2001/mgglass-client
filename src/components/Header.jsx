import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../const'
import "../css/swiperCss.css"
import PergolaButton from './pergolot/PergolaButton'
import MeklahonButton from './meklahon/MeklahonButton'
import MakotButton from './makot/MakotButton'
import { useTranslation } from 'react-i18next'
import LanguageSelector from '../assets/translate/languageSelector'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const { business } = useSelector(state => state.businessReducer)
  const address = business?.businessAddress[i18n.language]
  const homePage = t('homePage')
  const pergolas = t('pergolas')
  const showers = t('showers')
  const railings = t('railings')
  const contactUs = t('contactUs')
  const isHome = location.pathname === ROUTES.HOME || location.pathname === '/';
  // INSERT_YOUR_CODE
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      setScrolled(isHome && window.scrollY >= 50);
    };
  
    handleScroll(); // ✅ run immediately on refresh
  
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]); // ✅ update when route changes
  
  return (
    <>
      <div className={`navbar navbar-expand-xl ${isHome ? (!scrolled ? 'bg-transparent' : 'bg-secondary-subtle') : 'bg-secondary-subtle'} fixed-top shadow-sm px-2 px-lg-5 py-3 py-lg-4`} dir={dir}>
        {/* Logo and contact info */}
        <div className="d-flex align-items-center gap-2 gap-xl-3 mb-1 mb-xl-2" dir={dir}>
          {/* <div className="position-relative" style={{ width: '50px', height: '50px' }}>
            <img src={business?.businessLogo.image} alt="logo" className="w-100 h-100" />
          </div> */}
          <div >
            <h1 className={`h5 h4-lg m-0 d-none d-sm-block ${isHome ? (!scrolled ? 'text-white' : 'text-black') : 'text-black'}`} style={{ fontSize: '2.5rem' }}>
              {business?.businessName}
            </h1>
            {/* <div className="small text-muted" dir={dir}>
              <div className="fs-7 fs-6-xl">
                <div className="text-white">{business?.businessPhone} 📞</div>
                {business?.businessWhatsapp && (
                  <a
                    href={business?.businessWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ms-2 text-white"
                    title={t('contactOnWhatsapp') || "WhatsApp"}
                    style={{ verticalAlign: "middle", display: "inline-block", color: 'white' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.93 7.93 0 0 0 8.002 0C3.584 0 .003 3.58.003 7.998a7.945 7.945 0 0 0 1.096 4.073L0 16l4.097-1.076A7.958 7.958 0 0 0 8.002 15.997c4.417 0 7.997-3.58 7.997-7.998a7.93 7.93 0 0 0-2.398-5.673Zm-5.6 12.176c-1.276 0-2.528-.338-3.612-.977l-.258-.153-2.43.637.648-2.369-.168-.262a6.954 6.954 0 0 1-1.072-3.709c0-3.859 3.142-7.002 7.002-7.002 1.872 0 3.63.728 4.951 2.048A6.96 6.96 0 0 1 15 7.999c0 3.86-3.142 7.003-7 7.003Zm4.053-5.308c-.221-.111-1.308-.645-1.511-.72-.202-.074-.35-.111-.497.112-.148.222-.57.719-.699.867-.128.148-.259.166-.48.056-.222-.112-.937-.345-1.786-1.099-.66-.587-1.104-1.314-1.232-1.536-.128-.222-.014-.342.097-.454.099-.098.22-.255.33-.382.112-.127.148-.222.223-.37.075-.148.038-.277-.019-.389-.056-.111-.497-1.201-.682-1.649-.179-.433-.364-.372-.497-.38l-.423-.007a.43.43 0 0 0-.311.146c-.107.114-.406.397-.406.968 0 .571.417 1.125.475 1.203.059.078.818 1.25 1.99 2.037 1.176.785 1.176.523 1.391.491.214-.032 1.099-.447 1.255-.88.155-.431.155-.801.108-.879-.048-.078-.179-.127-.375-.222Z"/>
                    </svg>
                  </a>
                )}
              </div>
              <div className="fs-7 fs-6-xl text-white">{address} 📍</div>
              <div className="fs-7 fs-6-xl text-white">{business?.businessEmail} 📧</div>
            </div> */}
          </div>
          
        </div>

        {/* Desktop Navigation */}
        <div className="d-none d-xl-flex align-items-center gap-3 mx-auto">
          <div className="position-relative">
            <Link
              to={ROUTES.HOME}
              className={`btn btn-light px-4 ${isHome ? (!scrolled ? 'buttonLink' : '') : ''}`}
              onClick={() => setIsSidebarOpen(false)}
            >
              {homePage}
            </Link>
          </div>
          <PergolaButton className={`btn btn-light px-4 ${isHome ? (!scrolled ? 'buttonLink' : '') : ''}`} />
          <MeklahonButton className={`btn btn-light px-4 ${isHome ? (!scrolled ? 'buttonLink' : '') : ''}`} />
          <MakotButton className={`btn btn-light px-4 ${isHome ? (!scrolled ? 'buttonLink' : '') : ''}`} />
          <div className="position-relative">
            <Link
              to={ROUTES.CONTACT_US}
              className={`btn btn-light px-4 ${isHome ? (!scrolled ? 'buttonLink' : '') : ''}`}
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