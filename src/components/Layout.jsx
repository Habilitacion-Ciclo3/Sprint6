import React from 'react'
import Header from './Header'
import '../styles/Layout.css'
import Container from 'react-bootstrap/Container'

const Layout = ({children}) => {
    return (
        <div >
            <Header />
            <Container >
               {children} 
            </Container>           
                       
        </div>
    )
}

export default Layout
