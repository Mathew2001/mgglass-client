import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMeklahonCatByName } from '../../redux/actions/mecklahons/mecklahonCatActions'
import MeklahonCard from './MeklahonCard'
import { getMeklahonByCatId } from '../../redux/actions/mecklahons/mecklahonActions'
import ROUTES from '../../const'
import LinkPaths from '../LinkPaths'
import { Link } from 'react-router-dom'

const MeklahonByName = () => {
  const { name } = useParams()
  const { mecklahonCat , loading : catLoading,error: catError  } = useSelector(state => state.mecklahonCatReducer)
  const { mecklahonsByCatId , loading : mecklahonLoading,error: mecklahonError } = useSelector(state => state.mecklahonReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    if(!name) return;
    dispatch(getMeklahonCatByName(name))
  }, [dispatch, name])

  useEffect(() => {
    if(mecklahonCat?._id){
    dispatch(getMeklahonByCatId(mecklahonCat?._id))
    }
  }, [dispatch, mecklahonCat?._id])

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
    <div className="container py-4 mt-4" dir="rtl">
      <div className="mt-4 mb-4">
        <h1 className="text-center">{mecklahonCat.name}</h1>
        <LinkPaths pathString={`דף הבית / מקלחונים / ${mecklahonCat.name}`} routeMap={{ "דף הבית": ROUTES.HOME, "מקלחונים": ROUTES.MECKLAHONS, [mecklahonCat.name]: ROUTES.MECKLAHON_BY_CAT}} />
      </div>
      <div className='row row-cols-2 row-cols-lg-4 g-4'>
        {mecklahonsByCatId && mecklahonsByCatId.map((mecklahon) => (
          <MeklahonCard key={mecklahon._id} name={mecklahon.name} description={mecklahon.description} imageGallery={mecklahon.imageGallery} id={mecklahon._id} link={`${ROUTES.MECKLAHONS}/${mecklahonCat.name}/${mecklahon.name}`} />
          ))}
        </div>
      </div>
    </>
  )
}

export default MeklahonByName