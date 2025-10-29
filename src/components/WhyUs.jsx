import React from 'react'
import { useTranslation } from 'react-i18next'
const WhyUs = () => {
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const { title, sections } = t('whyUs', { returnObjects: true })
  const { section1, section2, section3 } = sections
  const { whyUsTitle1, whyUsDescription1: whyUsDescription1Section1, whyUsDescription2: whyUsDescription2Section1 } = section1
  const { whyUsTitle2, whyUsDescription1: whyUsDescription1Section2, whyUsDescription2: whyUsDescription2Section2 } = section2
  const { whyUsTitle3, whyUsDescription1: whyUsDescription1Section3, whyUsDescription2: whyUsDescription2Section3 } = section3
  return (
    <div className="mt-5" dir={dir}>
      <h2 className="h3 mb-4" dir={dir}>{title}</h2>
      <div className="d-flex flex-column align-items-start" dir={dir}>
        <div className="p-1" dir={dir}>
          <h4 className="h5">{whyUsTitle1}</h4>
          <p className="mb-0">• {whyUsDescription1Section1}</p>
          <p className="mb-0">• {whyUsDescription2Section1}</p>
        </div>
        <div className="p-1" dir={dir}>
          <h4 className="h5">{whyUsTitle2}</h4>
          <p className="mb-0">• {whyUsDescription1Section2}</p>
          <p className="mb-0">• {whyUsDescription2Section2}</p>
        </div>
        <div className="p-1" dir={dir}>
          <h4 className="h5">{whyUsTitle3}</h4>
          <p className="mb-0">• {whyUsDescription1Section3}</p>
          <p className="mb-0">• {whyUsDescription2Section3}</p>
        </div>
      </div>
    </div>
  )
}

export default WhyUs