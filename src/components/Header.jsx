import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";


const Header = () => {
    return (
        
                <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                     
                <Container>
                    <Navbar.Brand href="/">Habilishoes</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/productos">Productos</Nav.Link>
                    <Nav.Link href="/ventas">Gestión de ventas</Nav.Link>
                    <Nav.Link href="/usuarios">Gestión de usuarios</Nav.Link>
                    </Nav>
                </Container>
                                    
                     
                </Navbar>           
                
            
        
    )
}

export default Header
