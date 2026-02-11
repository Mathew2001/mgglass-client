import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './footer/Footer'
import AccessibilityWidget from './accessibility/AccessibilityWidget'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { getBusiness } from '../redux/actions/businessActions'
import { getAllPages } from '../redux/actions/PageActions'
import WhatsApp from './WhatsApp'
const Layout = () => {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const { business } = useSelector(state => state.businessReducer)
  const { pages } = useSelector((state) => state.pageReducer)
  useEffect(() => {
    dispatch(getBusiness())
    dispatch(getAllPages())
  }, [dispatch])

  if(!business) return <div>Loading...</div>
  if(!pages) return <div>Loading...</div>

  return (
    <div>
      {/* Skip to main content link for keyboard navigation - Israeli Accessibility Requirement */}
      <a href="#main-content" className="skip-to-main">
        {t('accessibility.skipToContent', { defaultValue: 'דלג לתוכן הראשי' })}
      </a>
      <Header/>
       <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <WhatsApp business={business} />
      <AccessibilityWidget />
    </div>
  )
}

export default Layout