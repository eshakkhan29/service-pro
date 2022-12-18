import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
    const { name, image, link, linkForm } = service;
    return (
        <div className='d-flex flex-column flex-lg-row p-0 serviceCard'>
            <div className='me-lg-3 half-width'>
                <img className='cardImage img-fluid h-100' src={image} alt={image} />
            </div>
            <div className='p-lg-2 px-4 py-3 half-width'>
                <h1 className='fs-4 mt-4 text-white'>{name}</h1>
                <Link className='mt-3 d-inline-block' to={linkForm}> <button className='quoteButton'>Request a Quote <FaArrowRight className='ms-2' /></button></Link> <br />
                <Link className='text-decoration-none linkText mt-3 pb-2' to={link}>Learn More</Link>
            </div>
        </div>
    );
};

export default ServiceCard;