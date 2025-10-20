import { lazy } from 'react'
import ROUTES from './const'

const Mecklahons = lazy(() => import('./components/meklahon/Meklahons'))
const Home = lazy(() => import('./components/Home'))
const Pergolot = lazy(() => import('./components/pergolot/Pergolot'))
const Makot = lazy(() => import('./components/makot/Makot'))
const ContactUs = lazy(() => import('./components/ContactUs'))
const PergolaByName = lazy(() => import('./components/pergolot/PergolaByName'))
const MeklahonByName = lazy(() => import('./components/meklahon/MeklahonByName'))
const MakotByName = lazy(() => import('./components/makot/MakotByName'))
const MaakeView = lazy(() => import('./components/makot/MaakeView'))
const MeklahonView = lazy(() => import('./components/meklahon/MeklahonView'))
const PergolaView = lazy(() => import('./components/pergolot/PergolaView'))

const routes =[
{
  path: ROUTES.HOME,
  element: Home,
},
{
  path: ROUTES.MECKLAHONS,
  element: Mecklahons,
},
{
  path: ROUTES.MECKLAHONS_BY_ID,
  element: MeklahonView,
},
{
  path: ROUTES.MECKLAHONS_BY_CAT,
  element: MeklahonByName,
},
{
  path: ROUTES.PROGLOT,
  element: Pergolot,
},
{
  path: ROUTES.PROGLOT_BY_ID,
  element: PergolaView,
},
{
  path: ROUTES.PROGLOT_BY_CAT,
  element: PergolaByName,
},
{
  path: ROUTES.MAKOT,
  element: Makot,
},
{
  path: ROUTES.MAKOT_BY_ID,
  element: MaakeView,
},
{
  path: ROUTES.MAKOT_BY_CAT,
  element: MakotByName,
},
{
  path: ROUTES.CONTACT_US,
  element: ContactUs,
},


]

export default routes;