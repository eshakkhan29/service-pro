import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
// services List
const services = [
    { name: "Commercial Disinfectant Cleaning", linkForm: "/commercial-form", link: "/commercial" },
    { name: "Office Cleaning", linkForm: "/office-form", link: "/office" },
    { name: "Restaurant & Cafe Cleaning", linkForm: "/restaurant-form", link: "/restaurant" },
    { name: "Gym Cleaning", linkForm: "/gym-form", link: "/gym" },
    { name: "Clinic / Urgent Care Cleaning", linkForm: "/clinic-form", link: "/clinic" },
    { name: "School Cleaning", linkForm: "/school-form", link: "/school" },
]
const MainNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Link to="/">
                <img className='logo' src="/images/logo/sample-logo.png" alt="logo" />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto menuLinks d-flex align-items-center gap-lg-5">
                    <NavLink className="menuLink m20 mt20" to="home">Home</NavLink>
                    <div
                        className='position-relative menuLink m20 '
                    >Services
                        <IoIosArrowForward className='arrow' />
                        <div className='dropdownServices shadow-sm d-flex flex-column text-start gap-3'>
                            {services.map((service, i) =>
                                <NavLink
                                    key={i}
                                    className="menuLink serviceMenu20"
                                    to={service.link}>
                                    {service.name}
                                </NavLink>)}
                        </div>
                    </div>
                    <div
                        className='position-relative m20 menuLink'
                        >Our company
                        <IoIosArrowForward className='arrow' />
                        <div className='dropdownPages shadow-sm d-flex flex-column gap-3'>
                            <NavLink className="menuLink mt20" to="/about-us">About Us </NavLink>
                            <NavLink className="menuLink" to="/contact-us">Contact Us</NavLink>
                            <NavLink className="menuLink" to="/faq">FAQ</NavLink>
                        </div>
                    </div>
                    <NavLink className="menuLink m20" to="blog">Blog</NavLink>
                    <button
                        className='bookingButton position-relative m20 d-none d-lg-flex align-items-center'>Book Online
                        <IoIosArrowForward className='ms-2 mt-1 btn-arrow' />
                        <div className='dropdown-form shadow-sm d-flex flex-column gap-3 text-start'>
                            {services.map((service, i) =>
                                <NavLink
                                    key={i}
                                    className="menuLink"
                                    to={service.linkForm}>
                                    {service.name}
                                </NavLink>)}
                        </div>
                    </button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MainNav;