import React from 'react';
import { Accordion } from 'react-bootstrap';
import PageBanner from '../components/common/PageBanner';

const Faq = () => {
    const faqs = [
        { q: "Where is your service area?", a: "We service Vancouver to Chilliwack." },
        { q: "How do I book a commercial cleaning service?", a: "If you’re online, simply select the service you want and click the Book Online button to get personalized pricing, and receive a confirmation the same day. It only takes 60 seconds. Use your smartphone, computer, or tablet. Or call us at +1 604-265-8744." },
        { q: "Do you use eco-friendly cleaning products?", a: "Yes, we do! Part of our commitment as a member of the community is not to harm the environment. That’s why we use only eco-friendly products which do just as good a cleaning job as traditional chemical cleaning products. If you prefer that we use traditional chemical products, just let us know when you book." },
    ]
    return (
        <div>
            <PageBanner text={"Frequently asked questions"} />
            <div className='container p-lg-0 my-5'>
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