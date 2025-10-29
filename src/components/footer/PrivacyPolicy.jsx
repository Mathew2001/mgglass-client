import React from 'react'
import { useTranslation } from 'react-i18next'

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation()
  const { title, sections } = t('privacyPolicy', { returnObjects: true })
  const { section1, section2, section3, section4, section5, section6, section7, section8 } = sections
  const { intro: introSection2, items: itemsSection2, outro: outroSection2 } = section2
  const { intro: introSection3, items: itemsSection3 } = section3
  const { intro: introSection7, items: itemsSection7, outro: outroSection7 } = section7

  const dir = i18n.dir()

  return (
    <div className="mt-5" dir={dir}>
      <div className="container py-4 mt-4" dir={dir}>
        <h1 className="text-center">{title}</h1>
        <div className="mt-4 mb-4">
          <h3 className="">{section1.title}</h3>
          <p>{section1.description}</p>
        </div>
        <div className="mt-4 mb-4">
          <h3 className="">{section2.title}</h3>
          <p>{introSection2}</p>
          <ul>
            {itemsSection2.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{outroSection2}</p>
        </div>
        <div className="mt-4 mb-4">
          <h3 className="">{section3.title}</h3>
          <p>{introSection3}</p>
          <ul>
            {itemsSection3.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 mb-4">
          <h3 className="">{section4.title}</h3>
          <p>{section4.description}</p>
        </div>
        <div className="mt-4 mb-4">
          <h3 className="">{section5.title}</h3>
          <p>{section5.description}</p>
        </div>
        <div className="mt-4 mb-4">
          <h3 className="">{section6.title}</h3>
          <p>{section6.description}</p>
        </div>
        <div className="mt-4 mb-4">
          <h3 className="">{section7.title}</h3>
          <p>{introSection7}</p>
          <ul>
            {itemsSection7.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{outroSection7}</p>
        </div>
        <div className="mt-4 mb-4">
          <h3 className="">{section8.title}</h3>
          <p>{section8.description}</p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy