import React from 'react';

const AboutHeader = () => {
    return (
        <div className='aboutHeader border-bottom'>
            <div className='container p-lg-0'>
                <div className='d-flex flex-column flex-lg-row align-items-center gap-4 py-4'>
                    <div className='aboutHeaderContent w-100'>
                        <h1 className='text-center'>Our Goal Is To Make Your Life Easier</h1>
                        <p className='text-center'>We make life easier for our clients by providing easy, reliable solutions for all their residential and commercial cleaning needs backed by world-class customer service.</p>
                    </div>
                    <div className='w-100'>
                        <img className='w-100' src="/images/about-us-head.jpg" alt="image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHeader;