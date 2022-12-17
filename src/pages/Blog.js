import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';

const Blog = () => {
    const blogs = [
        { link: "/commercial", image: "/images/services/service1.jpg", title: "Disinfection Services", blog: "Be it preventative disinfecting, or during a reported illness such as a positive COVID-19 case, we're readily available to eliminate harmful germs. Our cleaning technicians have the knowhow and equipment necessary to provide specialized disinfection services - including advanced Electro Static Spray disinfecting services." },
        { link: "/office", image: "/images/services/office.jpg", title: "Office Cleaning", blog: "Let ServePro take care of the details and we will ensure your space if cleaned meticulously to ensure a healthy workspace." },
        { link: "/restaurant", image: "/images/services/restaurant.jpg", title: "Restaurant & Cafe Cleaning", blog: "Are you using staff members to clean and sanitize your kitchen and dining areas? We’d like to take this essential restaurant management task off your team’s hands so they can focus on creating and serving delicious food that delights your hard won customers. We’ll work when you need us, with no disruption to hours of business. Our restaurant cleaning professionals are trained in all aspects of health and safety to help give your eatery a welcoming ambiance at all times. Our Live & Real-Time Booking Pages provide customizable options, instant pricing, and savings when you book recurring visits." },
        { link: "/gym", image: "/images/services/gym.jpg", title: "Gym Cleaning", blog: "A sparkling clean environment keeps your gym membership strong, growing, and healthy. And the COVID-19 pandemic made regular sanitation and disinfection of gyms an essential public health requirement. If your employees are doing the heavy lifting, it’s time you offloaded the work to gym cleaning professionals so you can concentrate on providing the ultimate customer experience. We have the products, equipment, and expertise to make fitness centers of all sizes safe, and relieve any customer anxiety. Our Live & Real-Time Booking Pages provide instant pricing and savings when you book recurring visits." },
        { link: "/clinic", image: "/images/services/clinic.jpg", title: "Customer First Phylosophy", blog: "We are proud to offer our customers top quality cleaning services and superior customer service. Our technicians arrive on-time, fully uniformed, with a smile and can provide you with the cleanest office you've ever had. We are dedicated to providing the highest level of service possible - every time." },
        { link: "/school", image: "/images/services/school.jpg", title: "School Cleaning", blog: "Parents want to know their children are spending their days in a safe, healthy learning environment. And if not properly maintained, a school can be an ideal breeding ground for and germs including SARS-CoV-2, the virus that causes COVID-19. A key part of a school’s responsibility is to take the necessary steps to ensure that standards of cleanliness meet and surpass all requirements and local legislation. As seasoned school cleaning professionals, our mission is to provide you with the peace of mind that comes from knowing your school is being cleaned and disinfected to the highest standards. Our Live & Real-Time Booking Pages provide instant pricing and savings when you book recurring visits." },
    ]
    return (
        <div>
            <PageBanner text={"Blog posts"} />
            <div className='pageBgPatten'>
                <div className='container p-lg-0'>
                    <div className='blog py-5'>
                        {blogs.map((blog, i) =>
                            <div key={i} className='bg-white serviceCard'>
                                <div>
                                    <img className='overflow-hidden blogImage' src={blog.image} alt="image" />
                                </div>
                                <div className='p-3'>
                                    <h1 className='fs-3'>{blog.title}</h1>
                                    <p>{blog.blog.length < 100 ? blog.blog : blog.blog.slice(0, 120) + "..."}</p>
                                    <Link className='seeMore' to={blog.link}>See more</Link>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;