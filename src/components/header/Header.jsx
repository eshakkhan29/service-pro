import React from 'react';
import { MdMail, MdPhone } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MainNav from './MainNav';

const Header = () => {
    return (
        <div className='container p-0'>
            {/* top */}
            <div>
                <div className='d-flex align-items-center fs-5 py-3'>
                    <div className='d-flex align-items-center gap-3 ms-auto'>
                        <div className='d-flex align-items-center gap-2'>
                            <MdMail className='mailIcon' />
                            <p className='mb-0 mail'>info@serveprojanitorial.ca</p>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <MdPhone className='phoneIcon' />
                            <p className='mb-0 phone'>+1 604-265-8744</p>
                        </div>
                    </div>
                    <div className='ms-auto'>
                        <div className='d-flex align-items-center gap-4'>
                            <Link className='icon' to="#"><FaFacebook /></Link>
                            <Link className='icon' to="#"><FaLinkedin /></Link>
                            <Link className='icon' to="#"><FaTwitter /></Link>
                            <Link className='icon' to="#"><FaInstagram /></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* main nav */}
            <MainNav />
        </div>
    );
};

export default Header;