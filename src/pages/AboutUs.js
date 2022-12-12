import React from 'react';
import AboutGoals from '../components/aboutUs/AboutGoals';
import AboutGuarantee from '../components/aboutUs/AboutGuarantee';
import AboutHeader from '../components/aboutUs/AboutHeader';
import PageBanner from '../components/common/PageBanner';

const AboutUs = () => {
    return (
        <div>
            <PageBanner text={"About us"} />
            <AboutHeader />
            <div className='container p-0 py-5'>
                <h1 className='text-center mainHeading'>With many years of experience, rest assured you’re in good hands</h1>
            </div>
            <AboutGoals />
            <AboutGuarantee/>
        </div>
    );
};

export default AboutUs;