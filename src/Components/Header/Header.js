import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {

    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const goHome = () => {
        history.push('/');
    }

    const goEvents = () => {
        history.push('/Events');
    }

    return (
        <div>
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
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="ml-auto">
                        {/* <Link to='/' style={{textDecoration:'none'}}>Home</Link> */}
                        <Nav.Link className="mx-2" onClick={goHome}>Home</Nav.Link>

                        <Nav.Link className="mx-2" href="">Donation</Nav.Link>
                        <Nav.Link className="mx-2" onClick={goEvents}>Events</Nav.Link>
                        <Nav.Link className="mx-2" href="">Blog</Nav.Link>


                        {
                            loggedInUser.isSignedIn
                                ? <Button variant="dark" className="mx-2">{loggedInUser.displayName}</Button>

                                : <Link to="/">
                                    <Button className="mx-2" variant="dark">Admin</Button>
                                </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
