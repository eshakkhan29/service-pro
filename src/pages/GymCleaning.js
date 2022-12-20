import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';
import ServicePageContent from '../components/common/ServicePageContent';
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
const GymCleaning = () => {
    
    return (
        <div>
            <PageBanner text={"Gym Cleaning"} />
            <div className='pageBgPatten'>
                <ServicePageContent
                    title={"Gym Cleaning"}
                    dialog={"A sparkling clean environment keeps your gym membership strong, growing, and healthy. And the COVID-19 pandemic made regular sanitation and disinfection of gyms an essential public health requirement. If your employees are doing the heavy lifting, it’s time you offloaded the work to gym cleaning professionals so you can concentrate on providing the ultimate customer experience. We have the products, equipment, and expertise to make fitness centers of all sizes safe, and relieve any customer anxiety. Our Live & Real-Time Booking Pages provide instant pricing and savings when you book recurring visits."}
                    image={"/images/services/gym.jpg"}
                    features={features}
                />
                <div className='text-center container px-lg-0 pb-5 pt-4'>
                    <h2 className='pageBottomText mb-4'>Click <span>Request a Quote</span> to set up a Gym Cleaning</h2>
                    <Link to={'/gym-form'}><button className='quoteButton'>Request A Quote</button></Link>
                </div>
            </div>
        </div>
    );
};

export default GymCleaning;