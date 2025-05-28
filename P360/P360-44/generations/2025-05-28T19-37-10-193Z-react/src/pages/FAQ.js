import React from 'react';

/**
 * FAQ component addresses common questions by providing concise and informative answers.
 * It aims to reduce barriers to conversion by clarifying uncertainties.
 */
const FAQ = () => {
    return (
        <section className="faq">
            <h2>Frequently Asked Questions</h2>
            <div className="question">
                <h3>What is the return policy?</h3>
                <p>Our return policy allows you to return products within 30 days of receipt for a full refund.</p>
            </div>
            {/* Repeat for other questions */}
        </section>
    );
};

export default FAQ;