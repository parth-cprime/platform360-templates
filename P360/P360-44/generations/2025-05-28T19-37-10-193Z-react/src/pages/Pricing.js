import React from 'react';

/**
 * Pricing component presents available pricing options with a clear comparison of features.
 * It is designed to help users choose the plan that best suits their needs.
 */
const Pricing = () => {
    return (
        <section className="pricing">
            <h2>Pricing Plans</h2>
            <div className="plan">
                <h3>Basic Plan</h3>
                <p>$9.99/month</p>
                <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    {/* List other features included in the plan */}
                </ul>
                <button>Choose Plan</button>
            </div>
            {/* Repeat for other plans */}
        </section>
    );
};

export default Pricing;