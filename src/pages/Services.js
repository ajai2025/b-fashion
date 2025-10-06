import React from 'react';
import './Services.css';

const Services = () => (
    <main className="services-page">
        <section className="services-hero">
            <h1>Our Fabrics – A Blend of Tradition & Innovation</h1>
            <p>
                We take pride in offering a wide range of premium fabrics sourced from skilled artisans and trusted mills across India:
            </p>
            <ul className="fabric-list">
                <li>
                    <strong>Chanderi from Banaras</strong> – Lightweight elegance with a royal sheen, perfect for ethnic and fusion wear.
                </li>
                <li>
                    <strong>Viscose</strong> – Smooth, breathable, and versatile for contemporary silhouettes.
                </li>
                <li>
                    <strong>Satin</strong> – Lustrous and soft, ideal for evening gowns and premium couture.
                </li>
                <li>
                    <strong>Modal</strong> – Sustainable comfort with a silky finish, perfect for modern fashion.
                </li>
                <li>
                    <strong>Silk</strong> – Pure luxury woven with tradition, timeless in every drape.
                </li>
            </ul>
            <p className="fabric-story">
                Each fabric tells a story — of craftsmanship, culture, and creativity — waiting to be transformed into your next masterpiece.
            </p>
        </section>
        <section className="services-list">
            <h2>Our Services</h2>
            <div className="service-cards">
                <div className="service-card">
                    <h3>Premium Fabrics</h3>
                    <p>High-quality fabrics for all your needs.</p>
                </div>
                <div className="service-card">
                    <h3>Custom Printing</h3>
                    <p>Bring your designs to life with our printing services.</p>
                </div>
                <div className="service-card">
                    <h3>Raw Materials</h3>
                    <p>Supplying raw cloths to designers and businesses.</p>
                </div>
            </div>
        </section>
    </main>
);

export default Services;