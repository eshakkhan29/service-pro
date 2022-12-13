import React from 'react';
import { Accordion } from 'react-bootstrap';
import PageBanner from '../components/common/PageBanner';

const Faq = () => {
    const faqs = [
        { q: "Where is your service area?", a: "Our expert maids are available in the greater Vancouver to Chilliwack. However, we are expanding our team and the area we cover every day so if you are not sure try booking online or call us. We’ll confirm in seconds." },
        { q: "How do I book a commercial cleaning?", a: "If you’re online, simply select the service you want and click the Book Online button to get personalized pricing, schedule an appointment in real-time based on our actual availability, and receive a confirmation. It only takes 60 seconds. Use your smartphone, computer, or tablet. Or call us at +1 604-265-8744." },
        { q: "Do you use eco-friendly cleaning products?", a: "Yes, we do! Part of our commitment as a member of the community is not to harm the environment. That’s why we use only eco-friendly products which do just as good a cleaning job as traditional chemical cleaning products. If you prefer that we use traditional chemical products, just let us know when you book." },
    ]
    return (
        <div>
            <PageBanner text={"Frequently asked questions"} />
            <div className='container p-0 py-5'>
                {faqs.map((faq, i) => 
                <Accordion className='py-2' key={i}>
                    <Accordion.Item className='border-0 shadow-sm accordionItem' eventKey={i}>
                        <Accordion.Header>{faq.q}</Accordion.Header>
                        <Accordion.Body>{faq.a}</Accordion.Body>
                    </Accordion.Item>
                </Accordion>)}
            </div>
        </div>
    );
};

export default Faq;