import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';
import ServicePageContent from '../components/common/ServicePageContent';
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
const Restaurant = () => {

    return (
        <div>
            <PageBanner text={"Restaurant and Cafe Cleaning"} />
            <div className='pageBgPatten'>
                <ServicePageContent
                    title={"Restaurant and Cafe Cleaning"}
                    dialog={"Are you using staff members to clean and sanitize your kitchen and dining areas? We’d like to take this essential restaurant management task off your team’s hands so they can focus on creating and serving delicious food that delights your hard won customers. We’ll work when you need us, with no disruption to hours of business. Our restaurant cleaning professionals are trained in all aspects of health and safety to help give your eatery a welcoming ambiance at all times. Our Live & Real-Time Booking Pages provide customizable options, instant pricing, and savings when you book recurring visits."}
                    image={"/images/services/restaurant.jpg"}
                    features={features}
                />
                <div className='text-center container px-lg-0 pb-5 pt-4'>
                    <h2 className='pageBottomText mb-4'>Click <span>Request a Quote</span> to set up a Restaurant & Cafe Cleaning</h2>
                    <Link to={'/restaurant-form'}><button className='quoteButton'>Request A Quote</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Restaurant;