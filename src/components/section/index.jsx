import React from 'react';

const Section = ({children, Bgcolor}) => {
    return (
        <section style={{backgroundColor: Bgcolor}} >
            <div className="max-w-7xl mx-auto px-5 md:px-10">
                {children}
            </div>
        </section>
    );
};

export default Section;