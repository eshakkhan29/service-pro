import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
const MainNav = () => {
    // services List
    const services = [
        { name: "Commercial Disinfectant Cleaning", link: "/commercial" },
        { name: "Office Cleaning", link: "/office" },
        { name: "Restaurant & Cafe Cleaning", link: "/restaurant" },
        { name: "Gym Cleaning", link: "/gym" },
        { name: "Clinic / Urgent Care Cleaning", link: "/clinic" },
        { name: "School Cleaning", link: "/school" },
    ]
    return (
        <Navbar collapseOnSelect expand="lg">
            <Link to="/">
                <img className='logo' src="/images/logo/sample-logo.png" alt="" />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto menuLink fs-5 d-flex align-items-center gap-lg-5 gap-3">
                    <NavLink to="home">Home</NavLink>
                    <NavLink
                        className='position-relative'
                        to="#">Services
                        <IoIosArrowForward className='arrow' />
                        <div className='dropdownService shadow-sm'>
                            <NavLink to="/">Commercial services
                                <IoIosArrowForward className='ms-2' />
                                <div className='dropdownServices shadow-sm d-flex flex-column gap-2 p-3'>
                                    {services.map((service, i) => <NavLink
                                        key={i}
                                        to={service.link}>
                                        {service.name}
                                    </NavLink>)}
                                </div>
                            </NavLink>
                        </div>
                    </NavLink>
                    <NavLink
                        className='position-relative'
                        to="#">Our company
                        <IoIosArrowForward className='arrow' />
                        <div className='dropdownPages shadow-sm'>
                            <div className='d-flex flex-column gap-2'>
                                <NavLink to="#">About Us </NavLink>
                                <NavLink to="#">Contact Us</NavLink>
                                <NavLink to="#">FAQ</NavLink>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="#">Blog</NavLink>
                    <button
                        className='bookingButton position-relative d-flex align-items-center'>Book Online
                        <IoIosArrowForward className='ms-2 mt-1' />
                        <div className='dropdownServiceButton shadow-sm'>
                            <NavLink to="#">Commercial services
                                <IoIosArrowForward className='ms-2' />
                                <div className='dropdownServicesMenu shadow-sm d-flex flex-column gap-2 text-start p-3'>
                                    {services.map((service, i) => <NavLink
                                        key={i}
                                        to={service.link}>
                                        {service.name}
                                    </NavLink>)}
                                </div>
                            </NavLink>
                        </div>
                    </button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MainNav;