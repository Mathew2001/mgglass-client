import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../const'
import { useTranslation } from 'react-i18next'

const MeklahonButton = ({className = 'btn btn-light px-4'}) => {
  const { t } = useTranslation()
  const showers = t('showers')
  return (
    <div className="position-relative">
      <Link
        to={ROUTES.MECKLAHONS}
        className={className}
      >
        {showers}
      </Link>
    </div>
  )
}

export default MeklahonButton