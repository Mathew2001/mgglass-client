import React, { useEffect } from 'react'
import PergolaCard from './PergolaCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPergolaCat } from '../../redux/actions/pergolas/pergolaCatActions'
import ROUTES from '../../const'
import LinkPaths from '../LinkPaths'
import { useTranslation } from 'react-i18next'

const Pergolot = () => {
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const language = i18n.language
  const pergolas = t('pergolas')
  const homePage = t('homePage')
  const dispatch = useDispatch()
  const { pergolaCats } = useSelector(state => state.pergolaCatReducer)
  useEffect(() => {
    dispatch(getAllPergolaCat())
  }, [dispatch])
  
  // Add enough top margin to push the container content under the fixed header (commonly 56px or 64px; adjust as needed)


  if(!pergolaCats) {
    return <div className="container py-5" style={{marginTop: '100px'}}>
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">Loading...</h1>
        </div>
      </div>
    </div>
  }
  // console.log(pergolaCats)
  return (
    <>  
    <div className="container" dir={dir} style={{marginTop: '100px'}}>
      <div className="mt-4 mb-4">
        <h1 className="text-center">{pergolas}</h1>
        <LinkPaths pathString={`${homePage} / ${pergolas}`} routeMap={{ [homePage]: ROUTES.HOME, [pergolas]: ROUTES.PROGLOT}} />
      </div>
      <div className='row row-cols-md-2 row-cols-xl-3 g-4'>
        {pergolaCats && pergolaCats.map((pergolaCat) => (
          <PergolaCard key={pergolaCat?._id} name={pergolaCat?.name?.[language]} description={pergolaCat?.description?.[language]} imageGallery={pergolaCat?.imageGallery} id={pergolaCat?._id} link={`${ROUTES.PROGLOT}/${pergolaCat?.name?.[language]}`} type="object" />
        ))}
      </div>
    </div>
    </>
  )
}

export default Pergolot