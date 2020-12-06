import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

import './Header.css';

const Header = () => {

    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const goHome = () => {
        history.push('/');
    }

    const goEvents = () => {
        history.push('/Events');
    }

    const logOutHandle = () => {
        console.log('log out');

        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            // console.log('Sign-out successful.');
            // console.log(loggedInUser);
            // loggedInUser.isSignedIn = false;
            history.push('/Login') ;
            window.location.reload();
            
        }).catch(function (error) {
            // An error happened.
            console.log('log out - Jhamela Occur');
        });
    }

    return (
        <div className='header-div'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Brand href="#home">
                    <img
                        src={require("../../images/logo.png")}
                        width="150"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav"
                    className='text-center'
                >

                    <Nav className="ml-auto">
                        {/* <Link to='/' style={{textDecoration:'none'}}>Home</Link> */}
                        <Nav.Link className="mx-2" onClick={goHome}>Home</Nav.Link>

                        <Nav.Link className="mx-2" href="">Donation</Nav.Link>
                        <Nav.Link className="mx-2" onClick={goEvents}>Events</Nav.Link>
                        <Nav.Link className="mx-2" href="">Blog</Nav.Link>


                        {
                            loggedInUser.isSignedIn
                                ?
                                <div>
                                    <Button variant="danger" className="mx-2" onClick={logOutHandle}>Log Out</Button>
                                    
                                </div>

                                :
                                <Button className="mx-2" variant="dark" onClick={goEvents}>Log In</Button>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
