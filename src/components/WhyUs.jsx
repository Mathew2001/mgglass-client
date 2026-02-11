import React from 'react'
import { useTranslation } from 'react-i18next'
import '../../src/css/swiperCss.css'
const WhyUs = ({ section5 }) => {
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()

  const subSections5 = section5.text.split('\n\n').map((subSection) => subSection.split('\n'))

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-12 col-md-6 d-none d-md-block">
          <div className="h-100">
            <img src={section5.images[0].image} alt={section5.title} className="w-100 h-100 object-fit-cover " />
          </div>
        </div>
        <div className="col-12 col-md-6 d-none d-md-block">
          <h2 className="h3 mb-4">{section5.title}</h2>
        <div className="d-flex flex-column align-items-start" dir={dir}>
        {subSections5.map((subSection) => (
          <div className="p-1" dir={dir}>
            <h4 className="h5">{subSection[0]}</h4>
            {subSection.slice(1).map((line) => (
              <p className="mb-0">{line}</p>
            ))}
          </div>
        ))}
        </div>
        </div>

        <div className="col-12 col-md-6 d-block d-md-none m-2">
          <h2 className="h3 mb-4">{section5.title}</h2>
        <div className="d-flex flex-column align-items-start" dir={dir}>
        {subSections5.map((subSection) => (
          <div className="p-1" dir={dir}>
            <h4 className="h5">{subSection[0]}</h4>
            {subSection.slice(1).map((line) => (
              <p className="mb-0">{line}</p>
            ))}
          </div>
        ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs