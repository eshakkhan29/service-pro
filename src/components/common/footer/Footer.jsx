import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdMail, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import '../../../style/footer.css'
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
        { name: "Commercial Disinfectant Cleaning", link: "/" },
        { name: "Office Cleaning", link: "/commercial" },
        { name: "Restaurant & Cafe Cleaning", link: "/about-us" },
        { name: "Gym Cleaning", link: "/contact-us" },
        { name: "Clinic / Urgent Care Cleaning", link: "/blog" },
        { name: "School Cleaning", link: "/faq" },
    ]
    return (
        <div className='footerMain'>
            <div className='container p-0'>
                <div className='d-flex justify-content-between'>
                    <div className='fs-5 text-white'>
                        <img className='logo' src="/images/logo/sample-logo.png" alt="" />
                        <div className='d-flex align-items-center gap-2 mt-5'>
                            <MdMail className='text-white' />
                            <p className='m-0 mail text-white'>info@serveprojanitorial.ca</p>
                        </div>
                        <div className='d-flex align-items-center gap-2 mt-4'>
                            <MdPhone className='text-white' />
                            <p className='m-0 text-white'>+1 604-265-8744</p>
                        </div>
                        <div className='d-flex align-items-center gap-4 mt-4'>
                            <Link className='text-white' to="#"><FaFacebook /></Link>
                            <Link className='text-white' to="#"><FaLinkedin /></Link>
                            <Link className='text-white' to="#"><FaTwitter /></Link>
                            <Link className='text-white' to="#"><FaInstagram /></Link>
                        </div>
                    </div>
                    <div className='text-white mt-3'>
                        <h1 className='footerMenuTag'>Sitemap</h1>
                        <div className='d-flex flex-column gap-2 mt-3'>
                            {menus.map((menu, i) => <Link key={i} className='footerMenu' to={menu.link}>{menu.name}</Link>)}
                        </div>
                    </div>
                    <div className='text-white mt-3'>
                        <h1 className='footerMenuTag'>Commercial</h1>
                        <div className='d-flex flex-column gap-2 mt-3'>
                            {services.map((service, i) => <Link key={i} className='footerMenu' to={service.link}>{service.name}</Link>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;