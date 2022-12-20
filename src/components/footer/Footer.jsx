import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdMail, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import '../../style/footer.css'
const Footer = () => {
    // menu List
    const menus = [
        { name: "Home", link: "/" },
        { name: "Commercial services", link: "/commercial" },
        { name: "About us", link: "/about-us" },
        { name: "Contact us", link: "/contact-us" },
        { name: "Blog", link: "/blog" },
        { name: "FAQ", link: "/faq" },
    ]
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
        <footer className='footerMain'>
            <div className='container p-md-0'>
                <div className='d-flex flex-column flex-md-row justify-content-between gap-md-3'>
                    <div className='fs-5 text-white'>
                        <img className='logo' src="/images/logo/sample-logo.png" alt="logo" />
                        <div className='d-flex align-items-center gap-2 mt-md-5 mt-3'>
                            <MdMail className='text-white' />
                            <p className='m-0 mail text-white'>service@serveprojanitorial.ca</p>
                        </div>
                        <div className='d-flex align-items-center gap-2  mt-3'>
                            <MdPhone className='text-white' />
                            <p className='m-0 text-white'>+1 604-265-8744</p>
                        </div>
                        <div className='d-flex align-items-center gap-4 mt-3'>
                            <Link className='text-white' to="#"><FaFacebook /></Link>
                            <Link className='text-white' to="#"><FaLinkedin /></Link>
                            <Link className='text-white' to="#"><AiFillTwitterCircle /></Link>
                            <Link className='text-white' to="#"><FaInstagram /></Link>
                        </div>
                    </div>
                    <div className='text-white mt-lg-1 mt-md-3 mt-5'>
                        <h1 className='footerMenuTag'>Sitemap</h1>
                        <div className='d-flex flex-column gap-2 mt-3'>
                            {menus.map((menu, i) => <Link key={i} className='footerMenu ' to={menu.link}>{menu.name}</Link>)}
                        </div>
                    </div>
                    <div className='text-white mt-lg-1 mt-4 mt-md-3'>
                        <h1 className='footerMenuTag'>Commercial</h1>
                        <div className='d-flex flex-column gap-2 mt-3'>
                            {services.map((service, i) => <Link key={i} className='footerMenu' to={service.link}>{service.name}</Link>)}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;