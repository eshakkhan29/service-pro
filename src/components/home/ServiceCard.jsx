import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
    const { name, image, link } = service;
    return (
        <div className='d-flex p-0 serviceCard'>
            <div className='me-3'>
                <img className='cardImage overflow-hidden h-100' src={image} alt="image" />
            </div>
            <div className='p-2'>
                <h1 className='fs-4 mt-4'>{name}</h1>
                <Link className='mt-3 d-inline-block' to={link}> <button className='quoteButton'>Request a Quote <FaArrowRight className='ms-2' /></button></Link> <br />
                <Link className='text-decoration-none linkText mt-3' to={link}>Learn More</Link>
            </div>
        </div>
    );
};

export default ServiceCard;