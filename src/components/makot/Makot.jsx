import React, { useEffect } from 'react'
import MakotCard from './MakotCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMakotCat  } from '../../redux/actions/makot/makotCatActions'
import ROUTES from '../../const'
import LinkPaths from '../LinkPaths'

const Makot = () => {
  const dispatch = useDispatch()
  const { makotCats } = useSelector(state => state.makotCatReducer)
  useEffect(() => {
    dispatch(getAllMakotCat())
  }, [dispatch])

  return (
    <>
    <div className="container py-4 mt-4" dir="rtl">
      <div className="mt-4 mb-4">
        <h1 className="text-center">מעקות</h1>
        <LinkPaths pathString="דף הבית / מעקות" routeMap={{ "דף הבית": ROUTES.HOME, "מעקות": ROUTES.MAKOT}} />
      </div>
      <div className='row row-cols-2 row-cols-lg-4 g-4'>
      {makotCats && makotCats.map((makotCat) => (
          <MakotCard key={makotCat._id} name={makotCat.name} description={makotCat.description} imageGallery={makotCat.imageGallery} id={makotCat._id} link={`${ROUTES.MAKOT}/${makotCat.name}`}/>
      ))}
      </div>
    </div>
    </>
  )
}

export default Makot