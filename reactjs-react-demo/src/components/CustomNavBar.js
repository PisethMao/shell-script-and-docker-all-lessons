import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserSignUpModal from './UserSignUpModal';
import UserSignInModal from './UserSignInModal';
import AuthContext from './shared/AuthContext';

function CustomNavBar({ isAuthenticated, loginCallBack }) {
    const { logout, user } = useContext(AuthContext)


    console.log("THi sis the login user : ", user)
    const navigate = useNavigate()
    const [showSignUp, setShowSignUp] = useState(false)
    const [showSignIn, setShowSignIn] = useState(false)

    const ClientLinks = () => (
        <>
            <NavLink className={"nav-link"} to="/">
                Home
            </NavLink>
            <NavLink className={"nav-link"} to="/service">
                Service
            </NavLink>
            <NavLink className={"nav-link"} to="/products">
                Products
            </NavLink>
            <NavLink className={"nav-link"} to="/aboutus">
                AboutUs
            </NavLink>
        </>
    )
    const AdminLinks = () => (
        <>
            <NavLink className={"nav-link"} to="/">
                Dashboard
            </NavLink>
            <NavLink className={"nav-link"} to="/admin/products">
                Product Dashboard
            </NavLink>
            <NavLink className={"nav-link"} to="/admin/users">
                User Dashboard
            </NavLink>

        </>
    )
    const handleLogin = () => {
        setShowSignIn(true)

        // toast.success("Login Successfully!!")
        // loginCallBack(true)
        // localStorage.setItem("isLogin", true)
        // navigate("/")
    }


    const handleSignUp = () => {
        setShowSignUp(true)
    }
    const handleCloseSignUpModal = () => {
        setShowSignUp(false)
    }
    const handleCloseSignInModal = () => {
        setShowSignIn(false)
    }
    const handleLogout = () => {
        logout()
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary sticky-top">
            <UserSignUpModal showSignUp={showSignUp} handleCloseSignUp={handleCloseSignUpModal} />
            <UserSignInModal showSignIn={showSignIn} handleCloseSignIn={handleCloseSignInModal} />
            <Container>
                <Navbar.Brand href="#home">EarthDX</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto text-center">
                        {
                            isAuthenticated ? <AdminLinks /> : <ClientLinks />
                        }

                    </Nav>

                    {
                        <div className="d-flex justify-content-center">


                            {
                                isAuthenticated ?
                                    <>
                                        <button
                                            className='btn btn-warning'
                                            onClick={handleLogout}
                                        > Logout </button>
                                    </>
                                    :
                                    <>
                                        <button
                                            className='btn btn-warning me-3'
                                            onClick={handleSignUp}> Sign Up
                                        </button>
                                        <button
                                            className='btn btn-success'
                                            onClick={handleLogin}>
                                            Login
                                        </button>
                                    </>
                            }

                        </div>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavBar;