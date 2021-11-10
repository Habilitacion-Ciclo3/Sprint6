import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Header.css'
const Header = () => {
    return (
        <div className='Header'>
            
                <Link to="/"><h1 className='Header-title'>Ingreso</h1></Link>
            
            
                <Link to="/productos"><h1 className='Header-title'>Productos</h1></Link>
            
            
                <Link to="/ventas"><h1 className='Header-title'>Gestión de ventas</h1></Link>
                   
                <Link to="/usuarios"><h1 className='Header-title'>Gestión de usuarios</h1></Link>
            
        </div>
    )
}

export default Header
