import React from 'react';

/**
 * Features component that highlights 3-5 key benefits of the product/service.
 * Each feature is presented with a supporting visual and a brief description.
 */
const Features = () => {
    return (
        <section className="features">
            <h2>Key Features</h2>
            <div className="feature">
                <img src="/path/to/feature1.jpg" alt="Feature 1" />
                <h3>Feature 1</h3>
                <p>Description of Feature 1 highlighting how it benefits the user.</p>
            </div>
            {/* Repeat for other features */}
        </section>
    );
};

export default Features;