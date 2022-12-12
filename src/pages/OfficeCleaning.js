import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';
import ServicePageContent from '../components/common/ServicePageContent';

const OfficeCleaning = () => {
    const features = [
        { feature: "Vacuum loose debris from all floors and carpets" },
        { feature: "Disinfectant mopping of hard surface floors" },
        { feature: "Disinfect all dining area hard surfaces" },
        { feature: "Spray clean all dining area glass surfaces" },
        { feature: "Sanitize all kitchen surfaces and cutting boards" },
        { feature: "Empty all food waste trash and recyclables" },
        { feature: "Clean fryers and brush and scour grills" },
        { feature: "Clean grease traps" },
        { feature: "Sanitize meat and cheese slicers" },
        { feature: "Sanitize sinks, faucets, and beverage dispensers" },
        { feature: "Clean and thoroughly sanitize washrooms" },
        { feature: "Empty washroom trash bins and replace liners" }
    ]
    return (
        <div>
            <PageBanner text={"Office Cleaning"} />
            <div className='pageBgPatten'>
                <ServicePageContent
                    title={"Office Cleaning"}
                    dialog={"Let ServePro take care of the details and we will ensure your space if cleaned meticulously to ensure a healthy workspace."}
                    image={"/images/services/office.jpg"}
                    features={features}
                />
                <div className='text-center pb-5 pt-4'>
                    <h2 className='pageBottomText mb-4'>Click <span>Request a Quote</span> to set up an Office Cleaning</h2>
                    <Link to={'/'}><button className='quoteButton'>Request A Quote</button></Link>
                </div>
            </div>
        </div>
    );
};

export default OfficeCleaning;