import React from 'react';
import './About.css'; // Import CSS for styling

const About = () => {
    return (
        <main className="about">
            <section className="about-hero">
                <h1>About Banjara Fashion</h1>
                <p>
                    At Banjara Fashion, we are passionate about providing premium fabrics, custom printing, 
                    and raw materials to designers and businesses. With years of experience in the textile 
                    industry, we pride ourselves on quality and innovation.
                </p>
            </section>

            <section className="about-details">
                <h2>Our Mission</h2>
                <p>
                    To empower designers and businesses by delivering high-quality fabrics and services 
                    that inspire creativity and excellence.
                </p>

                <h2>Why Choose Us?</h2>
                <ul>
                    <li>Wide range of premium fabrics</li>
                    <li>Custom printing services tailored to your needs</li>
                    <li>Reliable supply of raw materials</li>
                    <li>Commitment to quality and customer satisfaction</li>
                </ul>
            </section>
        </main>
    );
};

export default About;