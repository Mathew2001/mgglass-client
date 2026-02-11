import React, { useEffect } from 'react'
import MeklahonCard from './MeklahonCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMeklahonCat } from '../../redux/actions/mecklahons/mecklahonCatActions'
import ROUTES from '../../const'
import LinkPaths from '../LinkPaths'
import { useTranslation } from 'react-i18next'
const Meklahons = () => {
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const language = i18n.language
  const showers = t('showers')
  const homePage = t('homePage')
  const dispatch = useDispatch()
  const { mecklahonCats } = useSelector(state => state.mecklahonCatReducer)
  useEffect(() => {
    dispatch(getAllMeklahonCat())
  }, [dispatch])

  return (
    <>
    <div className="container" dir={dir} style={{marginTop: '100px'}}>
      <div className="mt-4 mb-4">
        <h1 className="text-center">{showers}</h1>
        <LinkPaths pathString={`${homePage} / ${showers}`} routeMap={{ [homePage]: ROUTES.HOME, [showers]: ROUTES.MECKLAHONS }} />
      </div>
        <div className='row row-cols-md-2 row-cols-xl-3 g-4'>
          {mecklahonCats && mecklahonCats?.map((mecklahonCat) => (
            <MeklahonCard key={mecklahonCat?._id} name={mecklahonCat?.name?.[language]} description={mecklahonCat?.description?.[language]} imageGallery={mecklahonCat?.imageGallery} id={mecklahonCat?._id} link={`${ROUTES.MECKLAHONS}/${mecklahonCat?.name?.[language]}`} type="object"/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Meklahons