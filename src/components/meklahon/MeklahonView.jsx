import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMeklahonByName } from '../../redux/actions/mecklahons/mecklahonActions'
import { getMeklahonCatById } from '../../redux/actions/mecklahons/mecklahonCatActions'
import LinkPaths from '../LinkPaths'
import ROUTES from '../../const'

const MeklahonView = () => {
  const { name } = useParams()
  const { mecklahon, loading ,error: mecklahonError } = useSelector(state => state.mecklahonReducer)
  const { mecklahonCat, loading: mecklahonCatLoading,error: mecklahonCatError } = useSelector(state => state.mecklahonCatReducer)
  const dispatch = useDispatch()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)


  useEffect(() => {
    if(!name) return;
    dispatch(getMeklahonByName(name))
   }, [dispatch, name])

  useEffect(() => {
    if(mecklahon?._id){
      dispatch(getMeklahonCatById(mecklahon?.mecklahonCatId))
    }
  }, [dispatch, mecklahon?._id])

  if(loading || mecklahonCatLoading){
    return <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">Loading...</h1>
        </div>
      </div>
    </div>
  }
  if(mecklahonError || mecklahonCatError){
    return <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">Error...</h1>
        </div>
      </div>
    </div>
  }

  if(!mecklahon || !mecklahonCat){
    return <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">No data found...</h1>
        </div>
      </div>
    </div>
  }
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">{mecklahon?.name}</h1>
        </div>
      </div>
      <div className="col-12">
        <LinkPaths pathString={`דף הבית / מקלחונים / ${mecklahonCat.name} / ${mecklahon.name}`} routeMap={{ "דף הבית": ROUTES.HOME, "מקלחונים": ROUTES.MECKLAHONS, [mecklahonCat.name]: `${ROUTES.MECKLAHONS}/${mecklahonCat.name}`, [mecklahon.name]: `${ROUTES.MECKLAHONS}/${mecklahonCat.name}/${mecklahon.name}`}} />
      </div>
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <div className="position-relative">
            <img
              src={mecklahon?.imageGallery[currentImageIndex]}
              alt={mecklahon?.name}
              className="img-fluid rounded shadow"
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            />
            {mecklahon?.imageGallery.length > 1 && (
              <>
                <button
                  className="btn btn-light rounded-circle position-absolute top-50 end-0 translate-middle-y me-3"
                  onClick={() => setCurrentImageIndex((prevIndex) =>
                    prevIndex === mecklahon?.imageGallery.length - 1 ? 0 : prevIndex + 1
                  )}
                  style={{ width: '45px', height: '45px' }}
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
                <button
                  className="btn btn-light rounded-circle position-absolute top-50 start-0 translate-middle-y ms-3"
                  onClick={() => setCurrentImageIndex((prevIndex) =>
                    prevIndex === 0 ? mecklahon?.imageGallery.length - 1 : prevIndex - 1
                  )}
                  style={{ width: '45px', height: '45px' }}
                >
                  <i className="bi bi-chevron-left"></i>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <p className="lead text-center">{mecklahon?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default MeklahonView