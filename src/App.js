import { Routes, Route, HashRouter, BrowserRouter } from 'react-router-dom'
import routes from './routes'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'

function App() {
  return ( 
      <HashRouter>  
        <Header />
        <div className="container py-4 mt-4" dir="rtl">
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={<route.element />} />
            ))}
          </Routes>
        </div>
        <Footer />
      </HashRouter>
  );
}

export default App;
