import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

const IngresoSistema = () => {

    const { loginWithRedirect } = useAuth0();
    return (
        <div>
            <h1>Gestión de ingreso al sistema de información</h1>
            <button onClick={() => loginWithRedirect()}>Login</button>
        </div>
    )
}

export default IngresoSistema
