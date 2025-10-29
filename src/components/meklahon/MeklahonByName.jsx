import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMeklahonCatByName } from '../../redux/actions/mecklahons/mecklahonCatActions'
import MeklahonCard from './MeklahonCard'
import { getMeklahonByCatId } from '../../redux/actions/mecklahons/mecklahonActions'
import ROUTES from '../../const'
import LinkPaths from '../LinkPaths'
import { Link, generatePath } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import SwiperItems from '../SwiperItems'
const MeklahonByName = () => {
  const { name } = useParams()
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const language = i18n.language
  const showers = t('showers')
  const homePage = t('homePage')
  const { mecklahonCat , loading : catLoading,error: catError  } = useSelector(state => state.mecklahonCatReducer)
  const { mecklahonsByCatId , loading : mecklahonLoading,error: mecklahonError } = useSelector(state => state.mecklahonReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if(!name) return;
    dispatch(getMeklahonCatByName({name,language}))
  }, [dispatch, name])

  useEffect(() => {
    if(mecklahonCat && mecklahonCat?._id){
    dispatch(getMeklahonByCatId(mecklahonCat?._id))
    }
  }, [dispatch, mecklahonCat?._id])

  useEffect(() => {
    if (!mecklahonCat?._id) return
    const translated = mecklahonCat?.name?.[i18n.language]
    if (!translated) return
    const newPath = generatePath('/showers/:catName', { catName: translated })
    if (decodeURIComponent(window.location.pathname) !== newPath) {
      navigate(newPath, { replace: true })
    }
  }, [i18n.language, mecklahonCat?._id, mecklahonCat?.name, navigate])
  
  if(catLoading || mecklahonLoading){
    return <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">Loading...</h1>
        </div>
      </div>
    </div>
  }

  if(catError || mecklahonError){
    return <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">Error...</h1>
        </div>
      </div>
    </div>
  }

  if(!mecklahonCat || !mecklahonsByCatId){
    return <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">No data found...</h1>
        </div>
      </div>
    </div>
  }

  return (
    <>
    <div className="container py-4 mt-4" dir={dir}>
      <div className="mt-4 mb-4">
        <h1 className="text-center">{mecklahonCat?.name?.[language]}</h1>
        <LinkPaths pathString={`${homePage} / ${showers} / ${mecklahonCat?.name?.[language]}`} routeMap={{ [homePage]: ROUTES.HOME, [showers]: ROUTES.MECKLAHONS, [mecklahonCat?.name?.[language]]: ROUTES.MECKLAHON_BY_CAT}} />
      </div>
      {/* <div className='row row-cols-2 row-cols-lg-4 g-4'>
        {mecklahonsByCatId && mecklahonsByCatId.map((mecklahon) => (
          <MeklahonCard key={mecklahon._id} name={mecklahon.name?.[language]} description={mecklahon.description?.[language]} imageGallery={mecklahon.imageGallery} id={mecklahon._id} link={`${ROUTES.MECKLAHONS}/${encodeURIComponent(mecklahonCat?.name?.[language])}/${encodeURIComponent(mecklahon.name?.[language])}`} />
          ))}
        </div> */}
        <SwiperItems items={mecklahonsByCatId} renderItems={(item) => (
          <MeklahonCard key={item?._id} name={item?.name?.[language]} description={item?.description?.[language]} imageGallery={item?.imageGallery} id={item?._id} link={`${ROUTES.MECKLAHONS}/${encodeURIComponent(mecklahonCat?.name?.[language])}/${encodeURIComponent(item?.name?.[language])}`} />
        )} />
      </div>
    </>
  )
}

export default MeklahonByName