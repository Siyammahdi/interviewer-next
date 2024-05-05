import React from 'react';

const Section = ({children,  className}) => {
    return (
        <section className={className} >
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
};

export default Section;