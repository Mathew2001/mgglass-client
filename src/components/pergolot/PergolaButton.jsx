import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../const'
import { useTranslation } from 'react-i18next'
const PergolaButton = () => {
  const { t } = useTranslation()
  const pergolas = t('pergolas')
  return (
    <div className="position-relative">
      <Link
        to={ROUTES.PROGLOT}
        className="btn btn-light px-4"
      >
        {pergolas}
      </Link>
    </div>
  )
}

export default PergolaButton