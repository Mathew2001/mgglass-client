import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../const'
import { useTranslation } from 'react-i18next'

const MakotButton = ({className = 'btn btn-light px-4'}) => {
  const { t } = useTranslation()
  const railings = t('railings')
  return (
    <div className="position-relative">
      <Link
        to={ROUTES.MAKOT}
        className={className}
      >
        {railings}
      </Link>
    </div>
  )
}

export default MakotButton