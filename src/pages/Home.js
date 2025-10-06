import React, { useState, useEffect } from 'react';
import './Home.css';

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
        caption: 'Premium Fabrics for Designers',
    },
    {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
        caption: 'Custom Printing Solutions',
    },
    {
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80',
        caption: 'Supplying Raw Cloths to Businesses',
    },
];

const Home = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="home">
            {/* Slideshow Section */}
            <section className="slideshow">
                {slides.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`slide${idx === current ? ' active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="slide-caption">
                            <h2>{slide.caption}</h2>
                        </div>
                    </div>
                ))}
                <div className="slideshow-dots">
                    {slides.map((_, idx) => (
                        <span
                            key={idx}
                            className={idx === current ? 'dot active' : 'dot'}
                            onClick={() => setCurrent(idx)}
                        />
                    ))}
                </div>
            </section>

            {/* Welcome Section */}
            <section className="welcome-section">
                <h1>Welcome to Banjara Fashion</h1>
                <h2>Premium Fabrics. Timeless Craft. Inspired by You.</h2>
                <p>
                    At Banjara Fashion, we bring the finest raw fabrics directly from India’s rich textile heritage to the hands of modern creators.
                    Whether you’re an independent designer, boutique owner, or fashion house, our curated collection of luxurious textiles empowers you to bring your designs to life with unmatched quality and authenticity.
                </p>
            </section>

            {/* Services Section */}
            <section className="services">
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
};

export default Home;