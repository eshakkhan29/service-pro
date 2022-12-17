import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';
import ServicePageContent from '../components/common/ServicePageContent';

const Clinic = () => {
    const features = [
        { feature: "Sweep, mop, and vacuum all floors and carpets" },
        { feature: "Sanitize all high-touch surfaces" },
        { feature: "Dust and clean all furniture" },
        { feature: "Clean and polish all mirrors and windows" },
        { feature: "Sanitize all workout area surfaces" },
        { feature: "Disinfect all equipment and workout machines" },
        { feature: "Sanitize benches and locker doors" },
        { feature: "Clean shower walls, doors, curtains, and fixtures" },
        { feature: "Check shower areas for mold and fungus" },
        { feature: "Disinfect all sinks and toilets" },
        { feature: "Polish and disinfect bathroom fixtures" },
        { feature: "Empty trash bins and replace liners" }
    ]
    return (
        <div>
            <PageBanner text={"Clinic / Urgent Care Cleaning"} />
            <div className='pageBgPatten'>
                <div className='pageTitle container pt-5'>
                    <h1>Customer First Phylosophy</h1>
                    <p className='m-0'>We are proud to offer our customers top quality cleaning services and superior customer service. Our technicians arrive on-time, fully uniformed, with a smile and can provide you with the cleanest office you've ever had. We are dedicated to providing the highest level of service possible - every time.</p>
                </div>
                <ServicePageContent
                    title={"Trusted"}
                    dialog={"We have been a trusted leader since 2010 with the best trained, vetted and insured cleaning professionals in the industry. Sign up with ServePro and you'll enjoy the best cleaning service in your area."}
                    image={"/images/services/clinic.jpg"}
                    features={features}
                />
                <div className='text-center pb-5 pt-4'>
                    <h2 className='pageBottomText mb-4'>Click <span>Request a Quote</span> to set up a Clinic / Urgent Care Cleaning</h2>
                    <Link to={'/clinic-form'}><button className='quoteButton'>Request A Quote</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Clinic;