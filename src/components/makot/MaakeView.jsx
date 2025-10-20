import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMakotByName } from '../../redux/actions/makot/makotActions'
import { getMakotCatById} from '../../redux/actions/makot/makotCatActions'
import LinkPaths from '../LinkPaths'
import ROUTES from '../../const'

const MaakeView = () => {
  const { name } = useParams()
  const { makot, loading,error: makotError } = useSelector(state => state.makotReducer)
  const { makotCat,loading: makotCatLoading,error: makotCatError } = useSelector(state => state.makotCatReducer)
  const dispatch = useDispatch()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if(name){
    dispatch(getMakotByName(name))
    }
  }, [dispatch, name])

  useEffect(() => {
    if(makot?._id ){
      dispatch(getMakotCatById(makot?.makotCatId))
    }
  }, [dispatch, makot?._id])

  console.log(name)
  console.log(makot)
  console.log(makotCat)
  if(loading || makotCatLoading){
    return <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">Loading...</h1>
        </div>
      </div>
    </div>
  }
  if(makotError || makotCatError){
    return <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">Error...</h1>
        </div>
      </div>
    </div>
  }
  if(!makot || !makotCat){
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
          <h1 className="display-4 text-center mb-5">{makot?.name}</h1>
        </div>
      </div>
      <div className="col-12">
        <LinkPaths pathString={`דף הבית / מעקות / ${makotCat.name} / ${makot.name}`} routeMap={{ "דף הבית": ROUTES.HOME, "מעקות": ROUTES.MAKOT, [makotCat.name]: `${ROUTES.MAKOT}/${makotCat.name}`, [makot.name]: `${ROUTES.MAKOT}/${makotCat.name}/${makot.name}`}} />
      </div>
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <div className="position-relative">
            <img
              src={makot?.imageGallery[currentImageIndex]}
              alt={makot?.name}
              className="img-fluid rounded shadow"
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            />
            {makot?.imageGallery.length > 1 && (
              <>
                <button
                  className="btn btn-light rounded-circle position-absolute top-50 end-0 translate-middle-y me-3"
                  onClick={() => setCurrentImageIndex((prevIndex) =>
                    prevIndex === makot?.imageGallery.length - 1 ? 0 : prevIndex + 1
                  )}
                  style={{ width: '45px', height: '45px' }}
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
                <button
                  className="btn btn-light rounded-circle position-absolute top-50 start-0 translate-middle-y ms-3"
                  onClick={() => setCurrentImageIndex((prevIndex) =>
                    prevIndex === 0 ? makot?.imageGallery.length - 1 : prevIndex - 1
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
          <p className="lead text-center">{makot?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default MaakeView