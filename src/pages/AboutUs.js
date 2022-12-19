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
            <hr style={{ color: "#606060" }} />
            <div className='container p-lg-0 my-5'>
                <h1 className='text-center mainHeading'>With many years of experience, rest assured you’re in good hands</h1>
            </div>
            <AboutGoals />
            <hr style={{ color: "#606060" }} />
            <AboutGuarantee
                title={"Our Guarantee"}
                post={"We provide a 100% satisfaction guarantee. If you’re unhappy with our work we’ll give you a full refund or a re-do. Our business was built on community reputation and that means everything to us."} />
            <AboutGuarantee
                title={"Trusted"}
                post={"We have been a trusted leader since 2010 with the best trained, vetted and insured cleaning professionals in the industry. Sign up with ServePro and you'll enjoy the best cleaning service in your area."} />
            <AboutGuarantee
                title={"Cleaning Disinfecting, Safety."}
                post={"Discover how ServePro Janitorial Systems can keep your business clean and employees safe."} />
            <AboutGuarantee
                title={"Customer First Philosophy"}
                post={"We are proud to offer our customers top quality cleaning services and superior customer service. Our technicians arrive on-time, fully uniformed, with a smile and can provide you with the cleanest office you've ever had. We are dedicated to providing the highest level of service possible - every time."} />
        </div>
    );
};

export default AboutUs;