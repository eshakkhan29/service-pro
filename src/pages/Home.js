import React from 'react';
import ServiceCard from '../components/home/ServiceCard';
import '../style/home.css'
 const services = [
        { name: "Commercial Disinfectant Cleaning", image: "/images/services/service1.jpg", linkForm: "/commercial-form", link: "/commercial" },
        { name: "Office Cleaning", image: "/images/services/office.jpg", linkForm: "/office-form", link: "/office" },
        { name: "Restaurant & Cafe Cleaning", image: "/images/services/restaurant.jpg", linkForm: "/restaurant-form", link: "/restaurant" },
        { name: "Gym Cleaning", image: "/images/services/gym.jpg", linkForm: "/gym-form", link: "/gym" },
        { name: "Clinic / Urgent Care Cleaning", image: "/images/services/clinic.jpg", linkForm: "/clinic-form", link: "/clinic" },
        { name: "School Cleaning", image: "/images/services/school.jpg", linkForm: "/school-form", link: "/school" },
    ]
const Home = () => {
   
    return (
        <>
            {/* banner */}
            <div className='banner h-100'>
                <hr className='mt-0' style={{ color: "#606060" }} />
                <div>
                    <h1 className='bannerHeading'>Commercial Cleaning and Facility Management Services</h1>
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