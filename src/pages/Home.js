import React from 'react';
import './Home.css'; // Import a CSS file for styling

const Home = () => {
    return (
        <main className="home">
            {/* Hero Section */}
            <section className="hero">
                <h1>Welcome to Banjara Fashion</h1>
                <p>Your one-stop solution for premium fabrics, custom printing, and raw materials for designers.</p>
                <button className="cta-button">Explore Our Collection</button>
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