import React from 'react'
import { useTranslation } from 'react-i18next'
const AccessibilityStatement = () => {
  const { t, i18n } = useTranslation()
  const { title, sections } = t('accessibilityStatement', { returnObjects: true })
  const { section1, section2, section3, section4 } = sections
  const dir = i18n.dir()

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
          <p>{section3.description}</p>
        </div>
        <div className="mt-4">
          <h3 className="">{section4.title}</h3>
          <p>{section4.description}</p>
        </div>
      </div>
    </div>
  )
}

export default AccessibilityStatement