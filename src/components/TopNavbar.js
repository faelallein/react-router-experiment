import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function TopNavbar(){
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Router</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link ><Link to='/' >Home</Link></Nav.Link>
                <Nav.Link ><Link to='/subrotas' >SubRotas</Link></Nav.Link>
                <Nav.Link ><Link to='/parameters'>Parametros</Link></Nav.Link>
                <Nav.Link ><Link to='/recursive'>Recursive</Link></Nav.Link>
            </Nav>
        </Navbar>        
    )
}