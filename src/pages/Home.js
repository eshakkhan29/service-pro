import React from 'react';
import ServiceCard from '../components/home/ServiceCard';
import '../style/home.css'
// fake data
const services = [
    { name: "Commercial Disinfectant Cleaning", image: "/images/services/service1.jpg", link: "/commercial" },
    { name: "Office Cleaning", image: "/images/services/office.jpg", link: "/office" },
    { name: "Restaurant & Cafe Cleaning", image: "/images/services/restaurant.jpg", link: "/restaurant" },
    { name: "Gym Cleaning", image: "/images/services/gym.jpg", link: "/commercial" },
    { name: "Clinic / Urgent Care Cleaning", image: "/images/services/clinic.jpg", link: "/gym" },
    { name: "School Cleaning", image: "/images/services/school.jpg", link: "/school" },
]
const Home = () => {
    return (
        <>
            {/* banner */}
            <div className='banner h-100 border-top'>
                <div>
                    <h1 className='bannerHeading'>Commercial Cleaning and Facility Management Services</h1>
                </div>
            </div>
            {/* cleaning services */}
            <div className='container'>
                <div className='sectionHeader'>
                    <h1 className='serviceHeading'>Looking for the best commercial cleaning services?</h1>
                    <p className='serviceParagraph'>We Have The Resources, Scope And Experience to maintain your office workspace.</p>
                </div>
                <div className='row row-cols-2 services'>
                    {services.map((service, i) => < ServiceCard service={service} />)}
                </div>
            </div>
        </>
    );
};

export default Home;