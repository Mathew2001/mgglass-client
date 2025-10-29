import React, { useEffect } from 'react'
import MakotCard from './MakotCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMakotCat  } from '../../redux/actions/makot/makotCatActions'
import ROUTES from '../../const'
import LinkPaths from '../LinkPaths'
import { useTranslation } from 'react-i18next'
import SwiperItems from '../SwiperItems'
const Makot = () => {
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const language = i18n.language
  const railings = t('railings')
  const homePage = t('homePage')
  const dispatch = useDispatch()
  const { makotCats } = useSelector(state => state.makotCatReducer)
  useEffect(() => {
    dispatch(getAllMakotCat())
  }, [dispatch])

  return (
    <>
    <div className="container py-4 mt-4" dir={dir}>
      <div className="mt-4 mb-4">
        <h1 className="text-center">{railings}</h1>
        <LinkPaths pathString={`${homePage} / ${railings}`} routeMap={{ [homePage]: ROUTES.HOME, [railings]: ROUTES.MAKOT}} />
      </div>
      {/* <div className='row row-cols-2 row-cols-lg-4 g-4'>
      {makotCats && makotCats.map((makotCat) => (
          <MakotCard key={makotCat._id} name={makotCat.name?.[language]} description={makotCat.description?.[language]} imageGallery={makotCat.imageGallery} id={makotCat._id} link={`${ROUTES.MAKOT}/${makotCat.name?.[language]}`}/>
      ))}
      </div> */}
      <SwiperItems items={makotCats} renderItems={(item) => (
        <MakotCard key={item?._id} name={item?.name?.[language]} description={item?.description?.[language]} imageGallery={item?.imageGallery} id={item?._id} link={`${ROUTES.MAKOT}/${item?.name?.[language]}`} />
      )} />
    </div>
    </>
  )
}

export default Makot