import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPergolaByName } from '../../redux/actions/pergolas/pergolaActions'
import { getPergolaCatById } from '../../redux/actions/pergolas/pergolaCatActions'
import LinkPaths from '../LinkPaths'
import ROUTES from '../../const'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { generatePath } from 'react-router-dom'
import ItemViewCard from '../ItemViewCard'

const PergolaView = () => {
  const { catName, name } = useParams()
  const { pergola, loading, error: pergolaError } = useSelector(state => state.pergolaReducer)
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const language = i18n.language
  const pergolas = t('pergolas')
  const homePage = t('homePage')
  const { pergolaCat, loading: pergolaCatLoading, error: pergolaCatError } = useSelector(state => state.pergolaCatReducer)
  const dispatch = useDispatch()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    if (name) {
      dispatch(getPergolaByName({ name: decodeURIComponent(name), language }))
    }
  }, [dispatch, name])

  useEffect(() => {
    if (pergola?._id) {
      dispatch(getPergolaCatById(pergola?.pergolaCatId))
    }
  }, [dispatch, pergola?._id])

  useEffect(() => {
    if (!pergola?._id || !pergolaCat?._id) return
    const newCat = pergolaCat?.name?.[i18n.language]
    const newItem = pergola?.name?.[i18n.language]
    if (!newCat || !newItem) return
    const newPath = generatePath('/pergolas/:catName/:name', {
      catName: newCat,
      name: newItem,
    })
    if (decodeURIComponent(window.location.pathname) !== newPath) {
      navigate(newPath, { replace: true })
    }
  }, [i18n.language, pergola?._id, pergola?.name, pergolaCat?._id, pergolaCat?.name, navigate])

  if (loading || pergolaCatLoading) {
    return <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">Loading...</h1>
        </div>
      </div>
    </div>
  }
  if (pergolaError || pergolaCatError) {
    return <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">Error...</h1>
        </div>
      </div>
    </div>
  }
  if (!pergola || !pergolaCat) {
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
          <h1 className="display-4 text-center mb-5">{pergola?.name?.[language]}</h1>
        </div>
        <div className="col-12">
          <LinkPaths pathString={`${homePage} / ${pergolas} / ${catName} / ${name}`} routeMap={{ [homePage]: ROUTES.HOME, [pergolas]: ROUTES.PROGLOT, [catName]: `${ROUTES.PROGLOT}/${catName}`, [name]: `${ROUTES.PROGLOT}/${catName}/${name}` }} />
        </div>
        <ItemViewCard imageGallery={pergola?.imageGallery} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} name={pergola?.name?.[language]} description={pergola?.description?.[language]} />
      </div>
    </div>
  )
}

export default PergolaView