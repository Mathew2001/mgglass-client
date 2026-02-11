import { Routes, Route, HashRouter, Navigate } from 'react-router-dom'
import routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/Layout'
import Home from './components/Home'

function App() {
  return ( 
      <HashRouter>  
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={<route.element />} />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </HashRouter>
  );
}

export default App;
