import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMakotCatByName } from '../../redux/actions/makot/makotCatActions'
import MakotCard from './MakotCard'
import { getMakotsByCatId } from '../../redux/actions/makot/makotActions'
import ROUTES from '../../const'
import LinkPaths from '../LinkPaths'
import { generatePath } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
const MakotByName = () => {
  const { name } = useParams()
  const { makotCat = null, loading = false,error: catError } = useSelector(state => state.makotCatReducer)
  const { makotsByCatId , loading: makotLoading,error: makotError } = useSelector(state => state.makotReducer)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const language = i18n.language
  const railings = t('railings')
  const homePage = t('homePage')
  const navigate = useNavigate()
  useEffect(() => {
    if(!name) return;
    dispatch(getMakotCatByName({name,language}))
  }, [dispatch, name])

  useEffect(() => {
    if(makotCat?._id){
    dispatch(getMakotsByCatId(makotCat?._id))
    }
  }, [dispatch, makotCat?._id])
  useEffect(() => {
    if (!makotCat?._id) return
    const translated = makotCat?.name?.[i18n.language]
    if (!translated) return
    const newPath = generatePath('/railings/:catName', { catName: translated })
    if (decodeURIComponent(window.location.pathname) !== newPath) {
      navigate(newPath, { replace: true })
    }
  }, [i18n.language, makotCat?._id, makotCat?.name, navigate])

  if(loading || makotLoading){
    return <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">Loading...</h1>
        </div>
      </div>
    </div>
  }

  if(catError || makotError){
    return <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">Error...</h1>
        </div>
      </div>
    </div>
  }

  if(!makotCat || !makotsByCatId){
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
    <div className="container" dir={dir} style={{marginTop: '100px'}}>
      <div className="mt-4 mb-4">
        <h1 className="text-center">{makotCat?.name?.[language]}</h1>
        <LinkPaths pathString={`${homePage} / ${railings} / ${makotCat?.name?.[language]}`} routeMap={{ [homePage]: ROUTES.HOME, [railings]: ROUTES.MAKOT, [makotCat?.name?.[language]]: ROUTES.MAKOT_BY_CAT}} />
      </div>
      <div className='row row-cols-md-2 row-cols-xl-3 g-4'>
        {makotsByCatId && makotsByCatId.map((makot) => (
          <MakotCard key={makot._id} name={makot.name?.[language]} description={makot.description?.[language]} imageGallery={makot.imageGallery} id={makot._id} link={`${ROUTES.MAKOT}/${makotCat?.name?.[language]}/${makot.name?.[language]}`} type="array"/>
        ))}
      </div>
    </div>
    </>
  )
}

export default MakotByName