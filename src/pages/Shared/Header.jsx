import { Navbar, Nav, } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo3.png'
import { useState } from 'react';
import DonateModal from '../Donate/DonateModal';
const Header = () => {
    const [show, setShow] = useState(false);
    const [navbarExpanded, setNavbarExpanded] = useState(false);

    const closeNavbar = () => {
        setNavbarExpanded(false);
    };

    const handleShow = () => {
        setShow(true)
        closeNavbar()
    };
    return (
        <Navbar collapseOnSelect expand="lg" /* fixed="top" */ className=' border-0 border-bottom fw-bold navbar navbar-expand-lg navbar-light  px-3' variant="light" style={{ background: '#020202' }} expanded={navbarExpanded}>
            <Navbar.Toggle onClick={() => setNavbarExpanded(!navbarExpanded)} aria-controls="responsive-navbar-nav " className='text-bg-light rounded-0' />
            <Navbar.Collapse id="responsive-navbar-nav ">
                <Nav className="justify-content-evenly navbar-nav w-100 ">
                    <Link to='' className="d-none d-sm-block">
                        <img src={logo} alt="" style={{ width: 164, height: 51 }} draggable={false} />
                    </Link>

                    <NavLink onClick={closeNavbar} to="/" className="nav-link my-auto text-white">Home</NavLink>
                    <NavLink onClick={closeNavbar} to="/works" className="nav-link my-auto text-white">Our Works</NavLink>
                    <NavLink onClick={closeNavbar} to="/about" className="nav-link my-auto text-white">About Us</NavLink>
                    <NavLink onClick={closeNavbar} to="/contact" className="nav-link my-auto text-white">Contact Us</NavLink>

                    <button onClick={handleShow} className='rounded bg-gradient-navy border border-1 my-2 fw-bold p-2 px-3 text-white'><i className="fa-solid fa-circle-dollar-to-slot me-2"></i>Donate Now</button>
                    <DonateModal show={show} setShow={setShow} />

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
