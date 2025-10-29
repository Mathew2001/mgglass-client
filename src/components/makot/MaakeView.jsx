import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMakotByName } from '../../redux/actions/makot/makotActions'
import { getMakotCatById } from '../../redux/actions/makot/makotCatActions'
import LinkPaths from '../LinkPaths'
import ROUTES from '../../const'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { generatePath } from 'react-router-dom'
import ItemViewCard from '../ItemViewCard'
const MaakeView = () => {
  const { name } = useParams()
  const { makot, loading, error: makotError } = useSelector(state => state.makotReducer)
  const { makotCat, loading: makotCatLoading, error: makotCatError } = useSelector(state => state.makotCatReducer)
  const dispatch = useDispatch()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const language = i18n.language
  const railings = t('railings')
  const homePage = t('homePage')
  const navigate = useNavigate()
  useEffect(() => {
    if (name) {
      dispatch(getMakotByName({ name, language }))
    }
  }, [dispatch, name])

  useEffect(() => {
    if (makot?._id) {
      dispatch(getMakotCatById(makot?.makotCatId))
    }
  }, [dispatch, makot?._id])

  useEffect(() => {
    if (!makot?._id || !makotCat?._id) return
    const newCat = makotCat?.name?.[i18n.language]
    const newItem = makot?.name?.[i18n.language]
    if (!newCat || !newItem) return
    const newPath = generatePath('/railings/:catName/:name', {
      catName: newCat,
      name: newItem,
    })
    if (decodeURIComponent(window.location.pathname) !== newPath) {
      navigate(newPath, { replace: true })
    }
  }, [i18n.language, makot?._id, makot?.name, makotCat?._id, makotCat?.name, navigate])

  if (loading || makotCatLoading) {
    return <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">Loading...</h1>
        </div>
      </div>
    </div>
  }
  if (makotError || makotCatError) {
    return <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">Error...</h1>
        </div>
      </div>
    </div>
  }
  if (!makot || !makotCat) {
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
      <div className="row justify-content-center ">
        <div className="col-12 mb-2">
          <h1 className="display-4 text-center">{makot?.name?.[language]}</h1>
        </div>
        <div className="col-12 mb-2">
          <LinkPaths pathString={`${homePage} / ${railings} / ${makotCat?.name?.[language]} / ${makot?.name?.[language]}`} routeMap={{ [homePage]: ROUTES.HOME, [railings]: ROUTES.MAKOT, [makotCat?.name?.[language]]: `${ROUTES.MAKOT}/${makotCat?.name?.[language]}`, [makot?.name?.[language]]: `${ROUTES.MAKOT}/${makotCat?.name?.[language]}/${makot?.name?.[language]}` }} />
        </div>
        <ItemViewCard imageGallery={makot?.imageGallery} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} name={makot?.name?.[language]} description={makot?.description?.[language]} />
      </div>
    </div>
  )
}

export default MaakeView