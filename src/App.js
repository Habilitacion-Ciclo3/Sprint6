import './App.css';
import IngresoSistema from './Containers/IngresoSistema';
import AdminProductos from './Containers/AdminProductos';
import Layout from './components/Layout';
import NotFounded from './components/NotFounded';
import AdminVentas from './Containers/AdminVentas';
import GestionUsuarios from './Containers/GestionUsuarios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    
    <Router>
          
      <Layout>
        <Routes>
          <Route exact path='/'  element={<IngresoSistema/>} />
          <Route path='/productos' element={<AdminProductos />} />
          <Route path='/ventas' element={<AdminVentas />} />
          <Route path='/usuarios' element={<GestionUsuarios/>} />
          <Route element={ <NotFounded/> }/>
        </Routes>
      </Layout>
    
    </Router>

  );
}

export default App;
