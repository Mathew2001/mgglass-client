import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../const'
import { useTranslation } from 'react-i18next'

const MeklahonButton = () => {
  const { t } = useTranslation()
  const showers = t('showers')
  return (
    <div className="position-relative">
      <Link
        to={ROUTES.MECKLAHONS}
        className="btn btn-light px-4"
      >
        {showers}
      </Link>
    </div>
  )
}

export default MeklahonButton