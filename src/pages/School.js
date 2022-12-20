import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';
import ServicePageContent from '../components/common/ServicePageContent';
const features = [
    { feature: "Sweep, mop, and vacuum all floors and carpets" },
    { feature: "Dust and clean all desks and furniture" },
    { feature: "Clean blackboards and whiteboards" },
    { feature: "Clean walls, shelving, and baseboards" },
    { feature: "Clean windows, windowsills, blinds, and curtains" },
    { feature: "Disinfect light switches and door handles" },
    { feature: "Disinfect all other high-touch surfaces" },
    { feature: "Clean and sanitize lunchroom and washrooms" },
    { feature: "Use spray disinfectant on toilets, doors, sinks, and appliances" },
    { feature: "Refill soap dispensers and paper towel holders" },
    { feature: "Load and run lunchroom dishwasher if needed" },
    { feature: "Empty and clean trash bins and replace liners" }
]
const School = () => {
    
    return (
        <div>
            <PageBanner text={"School Cleaning"} />
            <div className='pageBgPatten'>
                <ServicePageContent
                    title={"School Cleaning"}
                    dialog={"Parents want to know their children are spending their days in a safe, healthy learning environment. And if not properly maintained, a school can be an ideal breeding ground for and germs including SARS-CoV-2, the virus that causes COVID-19. A key part of a school’s responsibility is to take the necessary steps to ensure that standards of cleanliness meet and surpass all requirements and local legislation. As seasoned school cleaning professionals, our mission is to provide you with the peace of mind that comes from knowing your school is being cleaned and disinfected to the highest standards. Our Live & Real-Time Booking Pages provide instant pricing and savings when you book recurring visits."}
                    image={"/images/services/school.jpg"}
                    features={features}
                />
                <div className='text-center container px-lg-0 pb-5 pt-4'>
                    <h2 className='pageBottomText mb-4'>Click <span>Request a Quote</span> to set up a School Cleaning</h2>
                    <Link to={'/school-form'}><button className='quoteButton'>Request A Quote</button></Link>
                </div>
            </div>
        </div>
    );
};

export default School;