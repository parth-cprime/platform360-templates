import React from 'react';
import Header from '../components/layout/Header';
import Features from './Features';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQ from './FAQ';

/**
 * Home page serves as the main marketing page for the product/service.
 * It integrates various components to display brand, features, testimonials, pricing, and FAQs.
 */
const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <section className="hero">
                    <h1>Welcome to [Product/Service Name]</h1>
                    <p>Your ultimate solution to [problem statement].</p>
                    <button>Get Started</button>
                </section>
                <Features />
                <Testimonials />
                <Pricing />
                <FAQ />
            </main>
        </div>
    );
};

export default Home;