import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../const'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
const Footer = () => {
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const { business } = useSelector(state => state.businessReducer)
  const homePage = t('homePage')
  const showers = t('showers')
  const pergolas = t('pergolas')
  const railings = t('railings')
  const contactUs = t('contactUs')
  const quickLinks = t('quickLinks')
  const businessHoursTitle = t('businessHoursTitle')
  const closed = t('closed')
  const open = t('open')
  const address = business?.businessAddress[i18n.language]
  const copyright = t('copyright', { year: new Date().getFullYear() })
  const { title: privacyPolicyTitle } = t('privacyPolicy', { returnObjects: true })
  const { title: termsOfUseTitle } = t('termsOfUse', { returnObjects: true })
  const legal = t('legal')

  if(!business) return <div>Loading...</div>
  return (
    <footer className="bg-dark text-light py-4 mt-5" >
      <div className="container" >
        <div className="row" >
          <div className="col-md-4 mb-4" dir={dir}>
            <h5>{quickLinks}</h5>
            <div className="d-flex flex-column gap-2">
              <Link to={ROUTES.HOME} className="text-light text-decoration-none" >{homePage}</Link>
              <Link to={ROUTES.MECKLAHONS} className="text-light text-decoration-none" >{showers}</Link>
              <Link to={ROUTES.PROGLOT} className="text-light text-decoration-none" >{pergolas}</Link>
              <Link to={ROUTES.MAKOT} className="text-light text-decoration-none" >{railings}</Link>
              <Link to={ROUTES.CONTACT_US} className="text-light text-decoration-none" >{contactUs}</Link>
            </div>
          </div>
          <div className="col-md-4 mb-4" dir={dir}>
            <h5>{businessHoursTitle}</h5>
            {business?.businessHours.map((hour, index) => (
              hour.isOpen ? (
                <p key={index}>{hour.day[i18n.language]}: {hour.hours.openingTime} - {hour.hours.closingTime}</p>
              ) : (
                <p key={index}>{hour.day[i18n.language]}: {closed}</p>
              )
            ))}
          </div>
          <div className="col-md-4 mb-4" dir={dir}>
            <h5>{legal}</h5>
            <div className="d-flex flex-column gap-2">
              <Link to={ROUTES.PRIVACY_POLICY} className="text-light text-decoration-none" >{privacyPolicyTitle}</Link>
              <Link to={ROUTES.TERMS_OF_USE} className="text-light text-decoration-none" >{termsOfUseTitle}</Link>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="mb-0">{business?.businessPhone} 📞| {address} 📍| {business?.businessEmail} 📧</p>
          <p className="mb-0">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer