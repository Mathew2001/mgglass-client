import React from 'react'
import { useTranslation } from 'react-i18next'
const TermsOfUse = () => {
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const { title, sections } = t('termsOfUse', { returnObjects: true })
  const { section1, section2, section3, section4, section5, section6, section7, section8 } = sections


  return (
    <div className="mt-5" dir={dir}>
      <div className="container py-4 mt-4" dir={dir}>
        <h1 className="text-center">{title}</h1>
        <div className="mt-4">
          <h3 className="">{section1.title}</h3>
          <p>{section1.description}</p>
        </div>
        <div className="mt-4">
          <h3 className="">{section2.title}</h3>
          <ul>
            {section2.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="">{section3.title}</h3>
          <ul>
            {section3.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="">{section4.title}</h3>
          <ul>
            {section4.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="">{section5.title}</h3>
          <ul>
            {section5.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="">{section6.title}</h3>
          <p>{section6.description}</p>
        </div>
        <div className="mt-4">
          <h3 className="">{section7.title}</h3>
          <p>{section7.description}</p>
        </div>
        <div className="mt-4">
          <h3 className="">{section8.title}</h3>
          <p>{section8.description}</p>
        </div>
      </div>
    </div>
  )
}

export default TermsOfUse