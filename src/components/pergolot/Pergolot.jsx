import React, { useEffect } from 'react'
import PergolaCard from './PergolaCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPergolaCat } from '../../redux/actions/pergolas/pergolaCatActions'
import ROUTES from '../../const'
import { Link } from 'react-router-dom'
import LinkPaths from '../LinkPaths'

const Pergolot = () => {
  const dispatch = useDispatch()
  const { pergolaCats } = useSelector(state => state.pergolaCatReducer)
  useEffect(() => {
    dispatch(getAllPergolaCat())
  }, [dispatch])
  return (
    <>  
    <div className="container py-4 mt-4" dir="rtl">
      <div className="mt-4 mb-4">
        <h1 className="text-center">פרגולות</h1>
        <LinkPaths pathString="דף הבית / פרגולות" routeMap={{ "דף הבית": ROUTES.HOME, "פרגולות": ROUTES.PROGLOT}} />
      </div>
      <div className='row row-cols-2 row-cols-lg-4 g-4'>
        {pergolaCats && pergolaCats.map((pergola) => (
          <PergolaCard key={pergola._id} name={pergola.name} description={pergola.description} imageGallery={pergola.imageGallery} id={pergola._id} link={`${ROUTES.PROGLOT}/${pergola.name}`} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Pergolot