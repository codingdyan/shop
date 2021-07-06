import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar,Nav, Form, FormControl, Button, Container} from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="light" varient="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>SHOP</Navbar.Brand>
                    </LinkContainer>
                   
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-md-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link><i className="fa fa-shopping-cart"></i>Cart&nbsp;&nbsp;&nbsp;<span className="badge rounded-pill bg-dark" id="lblCartCount">0</span></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link ><i className="fa fa-user"></i>Login</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl type="text" placeholder="Search" className="form-control me-sm-2" />
                            <Button variant="btn btn-primary">Search</Button>
                        </Form>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
    )
}

export default Header