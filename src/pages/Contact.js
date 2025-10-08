import React from 'react';
import './Contact.css';

const Contact = () => (
    <main className="contact-page">
        <section className="contact-hero">
            <h1>Contact Us</h1>
            <p>
                We’d love to hear from you! Reach out for any queries, collaborations, or to experience our premium fabrics in person.
            </p>
        </section>
        <section className="contact-main">
            <div className="contact-details">
                <div className="contact-address card">
                    <h2>Our Address</h2>
                    <address>
                        <strong>Banjara Fashion</strong><br />
                        D 195, 2nd floor,<br />
                        Sector 10, Noida<br />
                        Pin: 201301
                    </address>
                </div>
                <div className="contact-persons card">
                    <h2>Contact Persons</h2>
                    <div className="contact-person-list">
                        <div className="contact-person">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Rohit Sachan" className="contact-avatar" />
                            <div>
                                <strong>Rohit Sachan</strong><br />
                                <span className="contact-role">Sales Manager</span><br />
                                <a className="contact-phone" href="tel:+918882383510">+91-8882383510</a>
                            </div>
                        </div>
                        <div className="contact-person">
                            <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Pappu Jha" className="contact-avatar" />
                            <div>
                                <strong>Pappu Jha</strong><br />
                                <span className="contact-role">Operations Head</span><br />
                                <a className="contact-phone" href="tel:+919717644060">+91-9717644060</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-map card">
                <h2>Find Us Here</h2>
                <div className="map-container">
                    <iframe
                        title="Banjara Fashion Location"
                        src="https://www.google.com/maps?q=D%20195,%202nd%20floor,%20Sector%2010,%20Noida,%20201301&output=embed"
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: '12px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <p>
                    <a className="map-link" href="https://maps.app.goo.gl/h2kVL6NRQftcNVt69" target="_blank" rel="noopener noreferrer">
                        View on Google Maps
                    </a>
                </p>
            </div>
        </section>
        <section className="contact-form-section card">
            <h2>Send Us a Message</h2>
            <form className="contact-form" onSubmit={e => e.preventDefault()}>
                <div className="form-row">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                </div>
                <textarea placeholder="Your Message" rows={4} required />
                <button type="submit">Send Message</button>
            </form>
        </section>
    </main>
);

export default Contact;