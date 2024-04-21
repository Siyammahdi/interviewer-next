import React from 'react';

const Section = ({children, Bgcolor}) => {
    return (
        <section style={{backgroundColor: Bgcolor}} >
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
};

export default Section;