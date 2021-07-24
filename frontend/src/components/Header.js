import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar,Nav, Form, FormControl, Button, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

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
                                <Nav.Link><i className="fa fa-shopping-cart"></i>Cart&nbsp;&nbsp;&nbsp;<span className="badge rounded-pill bg-dark" id="lblCartCount">
                                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}</span></Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id="username">
                                    <LinkContainer to="/profile">
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ): <LinkContainer to="/login">
                                <Nav.Link ><i className="fa fa-user"></i>Login</Nav.Link>
                            </LinkContainer>}
                            {userInfo && userInfo.isAdmin && (
                            <NavDropdown title="Admin" id="adminmenu">
                                <LinkContainer to="/admin/userlist">
                                    <NavDropdown.Item>Users</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/admin/productlist">
                                    <NavDropdown.Item>Products</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/admin/orderlist">
                                    <NavDropdown.Item>Orders</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                         )}
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