import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';
import ServicePageContent from '../components/common/ServicePageContent';
const features = [
    { feature: "Sweep, mop, and vacuum all floors and carpets" },
    { feature: "Dust and clean all furniture" },
    { feature: "Clean walls, shelving, and baseboards" },
    { feature: "Clean and polish all windows and mirrors" },
    { feature: "Hospital grade disinfectant used" },
    { feature: "Clean and disinfect light switches and door handles" },
    { feature: "Disinfect all high-touch surfaces" },
    { feature: "Disinfect all medical equipment" },
    { feature: "Polish and disinfect treatment room fixtures" },
    { feature: "Sanitize all washrooms" },
    { feature: "Disinfect all sinks, toilets, and fixtures" },
    { feature: "Empty trash bins and replace liners" }
]
const Clinic = () => {

    return (
        <div>
            <PageBanner text={"Clinic / Urgent Care Cleaning"} />
            <div className='pageBgPatten'>
                <ServicePageContent
                    title={"Clinic / Urgent Care Cleaning"}
                    dialog={"Medical and healthcare facilities must continuously meet the most stringent standards of cleanliness. A pristine clinic is fundamental to protecting patients, medical professionals, and visitors from the spread of infection. Elimination of viruses and bacteria from reception areas, treatment rooms, and offices by trained professionals is a public health responsibility we take very seriously. We ensure all surfaces are thoroughly cleaned and disinfected to create a healthy, pathogen-free environment. Our disinfection procedure eliminates bacteria and viruses such as SARS-CoV-2, E. Coli, Salmonella, MRSA, Listeria, Avian Flu, Norovirus, and many others. Our Live & Real-Time Booking Pages provide instant pricing and savings when you book recurring visits."}
                    image={"/images/services/clinic.jpg"}
                    features={features}
                />
                <div className='text-center container px-lg-0 pb-5 pt-4'>
                    <h2 className='pageBottomText mb-4'>Click <span>Request a Quote</span> to set up a Clinic / Urgent Care Cleaning</h2>
                    <Link to={'/clinic-form'}><button className='quoteButton'>Request A Quote</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Clinic;