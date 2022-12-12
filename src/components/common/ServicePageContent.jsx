import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ServicePageContent = ({ title, dialog, image, features }) => {
    return (
        <div className='container p-0 pt-5'>
            <div className='pageTitle'>
                <h1>{title}</h1>
                <p>{dialog}</p>
            </div>
            <div className='d-flex gap-5'>
                <img className='failed w-50' src={image} alt="" />
                <div className='d-flex flex-column gap-2'>
                    {features.map((feature, i) => <p
                        key={i}
                        className='serviceFeature'><FaCheckCircle className='checkIcon me-2' /> {feature.feature}</p>)}
                </div>
            </div>
        </div>
    );
};

export default ServicePageContent;