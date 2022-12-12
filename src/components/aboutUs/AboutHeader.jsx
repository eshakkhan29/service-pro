import React from 'react';

const AboutHeader = () => {
    return (
        <div className='aboutHeader border-bottom'>
            <div className='container p-0'>
                <div className='d-flex align-items-center gap-5 py-4'>
                    <div className='aboutHeaderContent'>
                        <h1 className='text-center'>Our Goal Is To Make Your Life Easier</h1>
                        <p className='text-center'>We make life easier for our clients by providing easy, reliable solutions for all their residential and commercial cleaning needs backed by world-class customer service.</p>
                    </div>
                    <div>
                        <img className='aboutImage' src="/images/about-us-head.jpg" alt="image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHeader;