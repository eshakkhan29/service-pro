import React from 'react';

const AboutHeader = () => {
    return (
        <div className=''>
            <div className='container p-lg-0'>
                <div className='d-flex flex-column flex-lg-row align-items-center gap-4 py-5'>
                    <div className='aboutHeaderContent w-100'>
                        <h1 className='text-center'>Our Goal is to Make Your Office Space and Facility Shine</h1>
                        <p className='text-center'>We make life easier for our clients by providing easy, reliable solutions for all their commercial cleaning needs backed by world-class customer service.</p>
                    </div>
                    <div className='w-100'>
                        <img className='w-100' src="/images/about-us-head.jpg" alt="about-header" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHeader;