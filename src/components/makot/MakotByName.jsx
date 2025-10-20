import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMakotCatByName , getAllMakotCat} from '../../redux/actions/makot/makotCatActions'
import MakotCard from './MakotCard'
import { getMakotsByCatId } from '../../redux/actions/makot/makotActions'
import ROUTES from '../../const'
import LinkPaths from '../LinkPaths'
import { Link } from 'react-router-dom'


const MakotByName = () => {
  const { name } = useParams()
  const { makotCat = null, loading = false,error: catError } = useSelector(state => state.makotCatReducer)
  const { makotsByCatId , loading: makotLoading,error: makotError } = useSelector(state => state.makotReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    if(!name) return;
    dispatch(getMakotCatByName(name))
  }, [dispatch, name])

  useEffect(() => {
    if(makotCat?._id){
    dispatch(getMakotsByCatId(makotCat?._id))
    }
  }, [dispatch, makotCat?._id])

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
    <div className="container py-4 mt-4" dir="rtl">
      <div className="mt-4 mb-4">
        <h1 className="text-center">{makotCat.name}</h1>
        <LinkPaths pathString={`דף הבית / מעקות / ${makotCat.name}`} routeMap={{ "דף הבית": ROUTES.HOME, "מעקות": ROUTES.MAKOT, [makotCat.name]: ROUTES.MAKOT_BY_CAT}} />
      </div>
      <div className='row row-cols-2 row-cols-lg-4 g-4'>
        {makotsByCatId && makotsByCatId.map((makot) => (
          <MakotCard key={makot._id} name={makot.name} description={makot.description} imageGallery={makot.imageGallery} id={makot._id} link={`${ROUTES.MAKOT}/${makotCat.name}/${makot.name}`}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default MakotByName