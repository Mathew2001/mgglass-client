import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPergolaCatByName } from '../../redux/actions/pergolas/pergolaCatActions'
import { getPergolaByCatId } from '../../redux/actions/pergolas/pergolaActions'
import PergolaCard from './PergolaCard'
import ROUTES from '../../const'
import LinkPaths from '../LinkPaths'
import { Link } from 'react-router-dom'

const PergolaByName = () => {
  const { name } = useParams();
  const dispatch = useDispatch();

  // Give defaults to avoid undefined/null during the first render
  const { pergolaCat = null, loading = false, error: catError } =
    useSelector(s => s.pergolaCatReducer) || {};
  const { pergolasByCatId = [], loading: listLoading = false, error: listError } =
    useSelector(s => s.pergolaReducer) || {};

  // 1) Fetch category whenever the route param changes
  useEffect(() => {
    if (!name) return;
    // URL parts may be encoded, normalize if needed:
    const decoded = decodeURIComponent(name);
    dispatch(getPergolaCatByName(decoded));
  }, [dispatch, name]);

  // 2) When category id is ready, fetch items in that category
  useEffect(() => {
    if (pergolaCat && pergolaCat._id) {
      dispatch(getPergolaByCatId(pergolaCat._id));
    }
  }, [dispatch, pergolaCat?._id]); // depend on the id specifically

  // 3) Loading / error guards
  if (loading || listLoading) {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 text-center">Loading…</h1>
          </div>
        </div>
      </div>
    );
  }

  if (catError || listError) {
    return (
      <div className="container py-5">
        <p className="text-danger text-center">
          {catError?.message || listError?.message || 'Something went wrong.'}
        </p>
      </div>
    );
  }

  // 4) Still not found? (e.g., wrong URL)
  if (!pergolaCat) {
    return (
      <div className="container py-5">
        <p className="text-center">Category not found.</p>
      </div>
    );
  }

  return (
    <>
      <div className="container py-4 mt-4" dir="rtl">
        <div className="mt-4 mb-4">
          <h1 className="text-center">{pergolaCat.name}</h1>
          <LinkPaths pathString={`דף הבית / פרגולות / ${pergolaCat.name}`} routeMap={{ "דף הבית": ROUTES.HOME, "פרגולות": ROUTES.PROGLOT, [pergolaCat.name]: ROUTES.PROGLOT_BY_CAT }} />
        </div>
        <div className='row row-cols-2 row-cols-lg-4 g-4'>
          {pergolasByCatId.map(p => (
            <PergolaCard
              key={p._id}
              name={p.name}
              description={p.description}
              imageGallery={p.imageGallery}
              id={p._id}
              link={`${ROUTES.PROGLOT}/${encodeURIComponent(pergolaCat.name)}/${encodeURIComponent(p.name)}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PergolaByName;
