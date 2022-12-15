import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ServicePageContent = ({ title, dialog, image, features }) => {
    return (
        <div className='container p-lg-0 pt-5'>
            <div className='pageTitle'>
                <h1>{title}</h1>
                <p>{dialog}</p>
            </div>
            <div className='d-flex page-content flex-column flex-lg-row gap-5'>
                <img className='failed servicePageImg' src={image} alt="" />
                <div className='d-flex flex-column gap-3'>
                    {features.map((feature, i) =>
                        <div className='d-flex gap-3'>
                            <div className='mt-1'>
                                <FaCheckCircle className='checkIcon' />
                            </div>
                            <p
                                key={i}
                                className='serviceFeature m-0'>{feature.feature}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServicePageContent;