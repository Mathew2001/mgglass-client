import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../const'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const homePage = t('homePage')
  const showers = t('showers')
  const pergolas = t('pergolas')
  const railings = t('railings')
  const contactUs = t('contactUs')
  const quickLinks = t('quickLinks')
  const { title, description } = t('businessHours', { returnObjects: true })
  const { weekdays, weekend, sunday } = description
  const location = t('location')
  const address = t('address')
  const phone = t('phone')
  const email = t('email')
  const copyright = t('copyright', { year: new Date().getFullYear() })
  const { title: privacyPolicyTitle } = t('privacyPolicy', { returnObjects: true })
  const { title: termsOfUseTitle } = t('termsOfUse', { returnObjects: true })
  const { title: accessibilityStatementTitle } = t('accessibilityStatement', { returnObjects: true })
  const legal = t('legal')
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
            <h5>{title}</h5>
            <p>{weekdays}</p>
            <p>{weekend}</p>
            <p>{sunday}</p>
          </div>
          <div className="col-md-4 mb-4" dir={dir}>
            <h5>{contactUs}</h5>
            <p>{phone} 052-4421044</p>
            <p>{location} {address}</p>
            <p>{email} glassmilya@gmail.com</p>
          </div>
          <div className="col-md-4 mb-4" dir={dir}>
            <h5>{legal}</h5>
            <div className="d-flex flex-column gap-2">
              <Link to={ROUTES.PRIVACY_POLICY} className="text-light text-decoration-none" >{privacyPolicyTitle}</Link>
              <Link to={ROUTES.TERMS_OF_USE} className="text-light text-decoration-none" >{termsOfUseTitle}</Link>
              <Link to={ROUTES.ACCESSIBILITY_STATEMENT} className="text-light text-decoration-none" >{accessibilityStatementTitle}</Link>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="mb-0">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer