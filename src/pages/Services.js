import React from 'react';
import './Services.css'; // Import CSS for styling

const Services = () => {
    return (
        <main className="services-page">
            <section className="services-hero">
                <h1>Our Services</h1>
                <p>Explore the wide range of services we offer to meet your fashion and textile needs.</p>
            </section>

            <section className="services-list">
                <div className="service-item">
                    <h2>Premium Fabrics</h2>
                    <p>We provide a wide range of high-quality fabrics for all your design needs.</p>
                </div>
                <div className="service-item">
                    <h2>Custom Printing</h2>
                    <p>Bring your designs to life with our state-of-the-art custom printing services.</p>
                </div>
                <div className="service-item">
                    <h2>Raw Materials</h2>
                    <p>Supplying raw cloths and materials to designers and businesses worldwide.</p>
                </div>
            </section>
        </main>
    );
};

export default Services;