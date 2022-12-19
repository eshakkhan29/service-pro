import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';
import ServicePageContent from '../components/common/ServicePageContent';
const features = [
    { feature: "Proven disinfection method to kill viruses including COVID-19" },
    { feature: "Kills 99.99% of viruses, bacteria, fungi and other pathogens" },
    { feature: "Trained experts wear full Personal Protective Equipment (PPE)" },
    { feature: "Disinfection by thorough hospital grade spray and wipe procedure" },
    { feature: "Disinfects laptops, keyboards, telephones, and other high-touch items" },
    { feature: "Immediate post-disinfection reoccupation" }
]
const Commercial = () => {

    return (
        <div>
            <PageBanner text={"Commercial Disinfectant Cleaning"} />
            <div className='pageBgPatten'>
                <ServicePageContent
                    title={"Commercial Disinfectant Cleaning"}
                    dialog={"Our commercial disinfectant cleaning is a proven and certified disinfection method to combat against bacteria and viruses including COVID-19. Your commercial space will be made safe for its occupants using the same validated methods and stringent standards as those practiced in many hospitals, clinics, dental offices, and patient care facilities. Use our Live Pricing & Real-Time Booking Pages to customize your commercial disinfectant cleaning to your unique commercial disinfectant cleaning needs, and instantly view personalized pricing on our website. Book online or call us and you will also receive an instant text and/or email confirmation. Save when you book recurring cleanings!"}
                    image={"/images/services/service1.jpg"}
                    features={features}
                />
                <div className='text-center container px-lg-0 pb-5 pt-4'>
                    <h2 className='pageBottomText mb-4'>Click <span>Request a Quote</span> to set up a Disinfectant Cleaning</h2>
                    <Link to={'/commercial-form'}><button className='quoteButton'>Request A Quote</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Commercial;