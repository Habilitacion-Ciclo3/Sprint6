import React from 'react'
import LoginButton from '../components/LoginButton'
import LogoutButton from '../components/LogoutButton'
import Profile from '../components/Profile'
import {useAuth0} from '@auth0/auth0-react'


const IngresoSistema = () => {

    const { isAuthenticated, isLoading } = useAuth0();
    
    if(isLoading) return <h1>Cargando.</h1>

    return (
        <div>
            <h1>Gestión de ingreso al sistema de información</h1>
            { isAuthenticated ? <LogoutButton /> :
             <LoginButton />}
            <Profile />
        </div>
    );
};

export default IngresoSistema
