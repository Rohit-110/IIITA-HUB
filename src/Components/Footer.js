import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7wlx7vj', 'template_dpk3rvu', form.current, 'UhsVpG8aJzI8gERVm')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                alert('Thank you for subscribing!');
                form.current.reset();
            }, (error) => {
                console.error('Email sending failed:', error.text);
                alert('Oops! Something went wrong. Please try again later.');
            });
    };

    return (
        <footer className="bg-dark text-white py-5">
            <div className="mt-4 container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>Address: IIITA, Jhalwa, Prayagraj</li>
                            <li>Email: placements@iiita.ac.in</li>
                            <li>Phone: +123 456 7890</li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/">Facebook</Link></li>
                            <li><Link to="/">Twitter</Link></li>
                            <li><Link to="/">Instagram</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Subscribe</h5>
                        <p>Subscribe to our newsletter for updates.</p>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-group">
                                <input type="email" name="user_email" className="form-control" placeholder="Enter your email" required />
                            </div>
                            <button type="submit" className="btn btn-light m-2">Subscribe</button>
                        </form>
                    </div>
                </div> 
                <hr className="my-4" />
                <div className="text-center">
                    <p>&copy; 2024 IIITA Hub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
