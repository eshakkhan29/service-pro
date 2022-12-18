import React from 'react';

const AboutGuarantee = ({ title, post }) => {
    return (
        <div className='aboutBottom'>
            <div className='container p-lg-0'>
                <h1 className='guarantee mb-0'>{title}</h1>
                <p className='guaranteeParagraphs mb-0 rounded-2'>{post}</p>
            </div>
        </div>
    );
};

export default AboutGuarantee;