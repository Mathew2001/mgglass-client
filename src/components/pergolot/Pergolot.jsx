import React, { useEffect } from 'react'
import PergolaCard from './PergolaCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPergolaCat } from '../../redux/actions/pergolas/pergolaCatActions'
import ROUTES from '../../const'
import LinkPaths from '../LinkPaths'
import { useTranslation } from 'react-i18next'
import SwiperItems from '../SwiperItems'

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
  
  return (
    <>  
    <div className="container py-4 mt-4" dir={dir}>
      <div className="mt-4 mb-4">
        <h1 className="text-center">{pergolas}</h1>
        <LinkPaths pathString={`${homePage} / ${pergolas}`} routeMap={{ [homePage]: ROUTES.HOME, [pergolas]: ROUTES.PROGLOT}} />
      </div>
      {/* <div className='row row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4'>
        {pergolaCats && pergolaCats.map((pergola) => (
          <PergolaCard key={pergola?._id} name={pergola?.name?.[language]} description={pergola?.description?.[language]} imageGallery={pergola?.imageGallery} id={pergola?._id} link={`${ROUTES.PROGLOT}/${pergola?.name?.[language]}`} />
        ))}
      </div> */}
      <SwiperItems items={pergolaCats} renderItems={(item) => (
        <PergolaCard key={item?._id} name={item?.name?.[language]} description={item?.description?.[language]} imageGallery={item?.imageGallery} id={item?._id} link={`${ROUTES.PROGLOT}/${item?.name?.[language]}`} />
      )} />
    </div>
    </>
  )
}

export default Pergolot