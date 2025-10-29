import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import USFLAG from '../pictures/lang/united-states.png'
import ILFLAG from '../pictures/lang/israel.png'

const languages = [
  { value: 'he', label: <img src={ILFLAG} alt='Israel' className='w-100 h-100' /> },
  { value: 'en', label: <img src={USFLAG} alt='United States' className='w-100 h-100' /> },
]

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const ChangeLanguage = (language) => {
    i18n.changeLanguage(language)
    setIsOpen(false)
  }

  useEffect(() => {
    document.body.dir = i18n.dir()
  }, [i18n, i18n.language])

  const currentLanguage = languages.find(lang => lang.value === i18n.language)

  return (
    <div className="position-relative">
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ cursor: 'pointer', width: '50px', height: '50px' }}
      >
        {currentLanguage.label}
      </div>
      
      {isOpen && (
        <div 
          className="position-absolute"
          style={{
            top: '100%',
            right: 0,
            backgroundColor: 'white',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            zIndex: 1000
          }}
        >
          {languages.map((language) => (
            <div
              key={language.value}
              onClick={() => ChangeLanguage(language.value)}
              style={{ 
                cursor: 'pointer',
                width: '50px',
                height: '50px',
                padding: '4px'
              }}
            >
              {language.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector;