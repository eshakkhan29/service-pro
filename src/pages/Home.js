import React from 'react';
import ServiceCard from '../components/home/ServiceCard';
import '../style/home.css'
const services = [
    { name: "Commercial Disinfectant Cleaning", image: "/images/services/commercial.png", linkForm: "/commercial-form", link: "/commercial" },
    { name: "Office Cleaning", image: "/images/services/office.png", linkForm: "/office-form", link: "/office" },
    { name: "Restaurant & Cafe Cleaning", image: "/images/services/restaurant.png", linkForm: "/restaurant-form", link: "/restaurant" },
    { name: "Gym Cleaning", image: "/images/services/gym.png", linkForm: "/gym-form", link: "/gym" },
    { name: "Clinic / Urgent Care Cleaning", image: "/images/services/clinic.png", linkForm: "/clinic-form", link: "/clinic" },
    { name: "School Cleaning", image: "/images/services/school.png", linkForm: "/school-form", link: "/school" },
]
const Home = () => {

    return (
        <>
            {/* banner */}
            <div className='banner'>
                <hr className='mt-0' style={{ color: "#606060" }} />
                <div className='bannerHeading'>
                    <h1>Commercial Cleaning and Facility Maintenance Services</h1>
                </div>
            </div>
            {/* services dialog */}
            <div className='container p-md-0'>
                <div className='sectionHeader'>
                    <h1 className='serviceHeading'>Looking for the best commercial cleaning services?</h1>
                    <p className='serviceParagraph'>We have the resources, scope and experience to maintain your office workspace.</p>
                </div>
                {/* services */}
                <div className='services'>
                    {services.map((service, i) => <ServiceCard key={i} service={service} />)}
                </div>
            </div>
        </>
    );
};

export default Home;