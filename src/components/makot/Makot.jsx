import React, { useEffect } from 'react'
import MakotCard from './MakotCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMakotCat  } from '../../redux/actions/makot/makotCatActions'
import ROUTES from '../../const'
import LinkPaths from '../LinkPaths'
import { useTranslation } from 'react-i18next'
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
    <div className="container" dir={dir} style={{marginTop: '100px'}}>
      <div className="mt-4 mb-4">
        <h1 className="text-center">{railings}</h1>
        <LinkPaths pathString={`${homePage} / ${railings}`} routeMap={{ [homePage]: ROUTES.HOME, [railings]: ROUTES.MAKOT}} />
      </div>
      <div className='row row-cols-md-2 row-cols-xl-3 g-4'>
      {makotCats && makotCats.map((makotCat) => (
          <MakotCard key={makotCat._id} name={makotCat.name?.[language]} description={makotCat.description?.[language]} imageGallery={makotCat.imageGallery} id={makotCat._id} link={`${ROUTES.MAKOT}/${makotCat.name?.[language]}`} type="object"/>
      ))}
      </div>
    </div>
    </>
  )
}

export default Makot