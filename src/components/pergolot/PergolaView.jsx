import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPergolaByName } from '../../redux/actions/pergolas/pergolaActions'
import { getPergolaCatById } from '../../redux/actions/pergolas/pergolaCatActions'
import LinkPaths from '../LinkPaths'
import ROUTES from '../../const'

const PergolaView = () => {
  const { name } = useParams()
  const { pergola, loading,error: pergolaError } = useSelector(state => state.pergolaReducer)
  const { pergolaCat, loading: pergolaCatLoading,error: pergolaCatError } = useSelector(state => state.pergolaCatReducer)
  const dispatch = useDispatch()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)


  useEffect(() => {
    if(name){
    dispatch(getPergolaByName(name))
    }
  }, [dispatch, name])

  useEffect(() => {
    if(pergola?._id){
      dispatch(getPergolaCatById(pergola?.pergolaCatId))
    }
  }, [dispatch, pergola?._id])


  if(loading || pergolaCatLoading){
    return <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">Loading...</h1>
        </div>
      </div>
    </div>
  }
  if(pergolaError || pergolaCatError){
    return <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-5">Error...</h1>
        </div>
      </div>
    </div>
  }
  if(!pergola || !pergolaCat){
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
          <h1 className="display-4 text-center mb-5">{pergola?.name}</h1>
        </div>
      </div>
      <div className="col-12">
        <LinkPaths pathString={`דף הבית / פרגולות / ${pergolaCat.name} / ${pergola.name}`} routeMap={{ "דף הבית": ROUTES.HOME, "פרגולות": ROUTES.PROGLOT, [pergolaCat.name]: `${ROUTES.PROGLOT}/${pergolaCat.name}`, [pergola.name]: `${ROUTES.PROGLOT}/${pergolaCat.name}/${pergola.name}`}} />
      </div>
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <div className="position-relative">
            <img
              src={pergola?.imageGallery[currentImageIndex]}
              alt={pergola?.name}
              className="img-fluid rounded shadow"
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            />
            {pergola?.imageGallery.length > 1 && (
              <>
                <button
                  className="btn btn-light rounded-circle position-absolute top-50 end-0 translate-middle-y me-3"
                  onClick={() => setCurrentImageIndex((prevIndex) =>
                    prevIndex === pergola?.imageGallery.length - 1 ? 0 : prevIndex + 1
                  )}
                  style={{ width: '45px', height: '45px' }}
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
                <button
                  className="btn btn-light rounded-circle position-absolute top-50 start-0 translate-middle-y ms-3"
                  onClick={() => setCurrentImageIndex((prevIndex) =>
                    prevIndex === 0 ? pergola?.imageGallery.length - 1 : prevIndex - 1
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
          <p className="lead text-center">{pergola?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default PergolaView