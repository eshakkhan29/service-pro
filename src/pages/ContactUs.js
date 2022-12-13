import React from 'react';
import PageBanner from '../components/common/PageBanner';

const ContactUs = () => {
    return (
        <div>
            <PageBanner text={"Contact us"} />
            <div className='pageBgPatten'>
                <div className='container px-0 py-4 d-flex align-items-center justify-content-between'>
                    <div className='getInTouch m-auto'>
                        <h1>Get in touch</h1>
                        <p className='mt-3'>T : +1 604-265-8744</p>
                        <p>M : info@serveprojanitorial.ca</p>
                    </div>
                    <div>
                        <iframe
                            className='rounded-3'
                            width={800}
                            height={500}
                            frameborder="0"
                            marginheight="0"
                            marginwidth="0"
                            src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d5593.640235628707!2d-73.6258170718714!3d45.49356698721631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d45.490894499999996!2d-73.6202831!4m3!3m2!1d45.49189!2d-73.620672!5e0!3m2!1sen!2sbd!4v1670869420836!5m2!1sen!2sbd">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;