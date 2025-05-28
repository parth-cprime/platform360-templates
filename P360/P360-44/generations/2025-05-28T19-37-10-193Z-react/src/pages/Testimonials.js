import React from 'react';

/**
 * Testimonials component showcases customer testimonials or case studies.
 * It aims to build trust by presenting real results achieved by using the product/service.
 */
const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2>What Our Customers Say</h2>
            <div className="testimonial">
                <blockquote>
                    "This product has revolutionized how we approach our daily tasks. Highly recommend it!"
                </blockquote>
                <cite>- Customer Name, Position</cite>
            </div>
            {/* Repeat for other testimonials */}
        </section>
    );
};

export default Testimonials;