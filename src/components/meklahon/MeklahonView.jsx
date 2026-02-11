import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMeklahonByName } from '../../redux/actions/mecklahons/mecklahonActions'
import { getMeklahonCatById } from '../../redux/actions/mecklahons/mecklahonCatActions'
import LinkPaths from '../LinkPaths'
import ROUTES from '../../const'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { generatePath } from 'react-router-dom'
import ItemViewCard from '../ItemViewCard'
const MeklahonView = () => {
  const { name } = useParams()
  const { mecklahon, loading ,error: mecklahonError } = useSelector(state => state.mecklahonReducer)
  const { mecklahonCat, loading: mecklahonCatLoading,error: mecklahonCatError } = useSelector(state => state.mecklahonCatReducer)
  const dispatch = useDispatch()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const language = i18n.language
  const showers = t('showers')
  const homePage = t('homePage')
  const navigate = useNavigate()
  useEffect(() => {
    if(!name) return;
    dispatch(getMeklahonByName({name,language}))
   }, [dispatch, name])

  useEffect(() => {
    if(mecklahon?._id){
      dispatch(getMeklahonCatById(mecklahon?.mecklahonCatId))
    }
  }, [dispatch, mecklahon?._id])

  useEffect(() => {
    if (!mecklahon?._id || !mecklahonCat?._id) return
    const newCat = mecklahonCat?.name?.[i18n.language]
    const newItem = mecklahon?.name?.[i18n.language]
    if (!newCat || !newItem) return
    const newPath = generatePath('/showers/:catName/:name', {
      catName: newCat,
      name: newItem,
    })
    if (decodeURIComponent(window.location.pathname) !== newPath) {
      navigate(newPath, { replace: true })
    }
  }, [i18n.language, mecklahon?._id, mecklahon?.name, mecklahonCat?._id, mecklahonCat?.name, navigate])

  if(loading || mecklahonCatLoading){
    return <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">Loading...</h1>
        </div>
      </div>
    </div>
  }
  if(mecklahonError || mecklahonCatError){
    return <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">Error...</h1>
        </div>
      </div>
    </div>
  }

  if(!mecklahon || !mecklahonCat){
    return <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">No data found...</h1>
        </div>
      </div>
    </div>
  }
  return (
    <div className="container py-5 mt-5" dir={dir}>
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">{mecklahon?.name?.[language]}</h1>
        </div>
        <div className="col-12">
          <LinkPaths pathString={`${homePage} / ${showers} / ${mecklahonCat?.name?.[language]} / ${mecklahon?.name?.[language]}`} routeMap={{ [homePage]: ROUTES.HOME, [showers]: ROUTES.MECKLAHONS, [mecklahonCat?.name?.[language]]: `${ROUTES.MECKLAHONS}/${mecklahonCat?.name?.[language]}`, [mecklahon?.name?.[language]]: `${ROUTES.MECKLAHONS}/${mecklahonCat?.name?.[language]}/${mecklahon?.name?.[language]}` }} />
        </div>
        <ItemViewCard imageGallery={mecklahon?.imageGallery} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} name={mecklahon?.name?.[language]} description={mecklahon?.description?.[language]} />
      </div>
    </div>
  )
}

export default MeklahonView