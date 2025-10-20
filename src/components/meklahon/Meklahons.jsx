import React, { useEffect } from 'react'
import MeklahonCard from './MeklahonCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMeklahonCat } from '../../redux/actions/mecklahons/mecklahonCatActions'
import ROUTES from '../../const'
import LinkPaths from '../LinkPaths'
import { Link } from 'react-router-dom'

const Meklahons = () => {
  const dispatch = useDispatch()
  const { mecklahonCats } = useSelector(state => state.mecklahonCatReducer)
  useEffect(() => {
    dispatch(getAllMeklahonCat())
  }, [dispatch])

  return (
    <>
    <div className="container py-4 mt-4" dir="rtl">
      <div className="mt-4 mb-4">
        <h1 className="text-center">מקלחונים</h1>
        <LinkPaths pathString="דף הבית / מקלחונים" routeMap={{ "דף הבית": ROUTES.HOME, "מקלחונים": ROUTES.MECKLAHONS }} />
      </div>
        <div className='row row-cols-2 row-cols-lg-4 g-4'>
          {mecklahonCats && mecklahonCats.map((mecklahonCat) => (
            <MeklahonCard key={mecklahonCat._id} name={mecklahonCat.name} description={mecklahonCat.description} imageGallery={mecklahonCat.imageGallery} id={mecklahonCat._id} link={`${ROUTES.MECKLAHONS}/${mecklahonCat.name}`} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Meklahons