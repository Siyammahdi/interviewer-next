import React from 'react';

const Section = ({children, Bgcolor}) => {
    return (
        <section style={{backgroundColor: Bgcolor}} >
            <div className="max-w-[1100px] mx-auto">
                {children}
            </div>
        </section>
    );
};

export default Section;