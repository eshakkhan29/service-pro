import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';
import ServicePageContent from '../components/common/ServicePageContent';
const features = [
    { feature: "Vacuum loose debris from all floors and carpets" },
    { feature: "Disinfectant mopping of hard surface floors" },
    { feature: "Remove dust from desks and furniture" },
    { feature: "Wipe down hard surfaces with mild disinfectant" },
    { feature: "Empty waste bins and replace liners" },
    { feature: "Spray clean all glass surfaces and mirrors" },
    { feature: "Wipe down light switches, door handles, and fixtures" },
    { feature: "Clean and sanitize breakrooms and washrooms" },
    { feature: "Use spray disinfectant on toilets, doors, sinks, and appliances" },
    { feature: "Refill soap dispensers and paper towel holders" },
    { feature: "Load and run breakroom dishwasher if needed" }
]
const OfficeCleaning = () => {

    return (
        <div>
            <PageBanner text={"Office Cleaning"} />
            <div className='pageBgPatten'>
                <ServicePageContent
                    title={"Office Cleaning"}
                    dialog={"A neat, tidy office is the hallmark of a professional business, allowing employees to focus on their work. A poorly maintained office is a health hazard which can harm productivity and make a poor impression on visitors. Our professional office cleaners will keep your office in tip top shape by performing a thorough cleaning and tidy up operation at a price you can afford. Our Live Pricing & Real-Time Booking Pages provide customizable options, instant pricing, and savings when you book recurring visits."}
                    image={"/images/services/office.jpg"}
                    features={features}
                />
                <div className='text-center container px-lg-0 pb-5 pt-4'>
                    <h2 className='pageBottomText mb-4'>Click <span>Request a Quote</span> to set up an Office Cleaning</h2>
                    <Link to={'/office-form'}><button className='quoteButton'>Request A Quote</button></Link>
                </div>
            </div>
        </div>
    );
};

export default OfficeCleaning;