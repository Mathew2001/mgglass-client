import { Routes, Route, HashRouter, Navigate } from 'react-router-dom'
import routes from './routes'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/footer/Footer'
import Home from './components/Home'
import AccessibilityButton from './components/footer/AccessibilityButton'
function App() {
  return ( 
      <HashRouter>  
        <Header />
        <div className="container py-4 mt-4" dir="rtl">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={<route.element />} />
            ))}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
        <AccessibilityButton />
        <Footer />
      </HashRouter>
  );
}

export default App;
