import React from 'react';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import img7 from '../images/img7.jpeg';
import img8 from '../images/img8.png';
import ContactCard from '../Components/ContactCard';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Scroll from '../Components/Scroll';

const Contact = () => {
    return (
        <div className='main bg-dark min-h-screen'>
            <Scroll />
            <Navbar />
            <div className='container mx-auto p-24'>
                <h1 className='text-4xl md:text-6xl font-bold text-white mb-10 text-center'>Meet Our Team</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <ContactCard image={img5} name={'Rohit Pandey'} role={'Full-Stack Developer'} />
                    <ContactCard image={img6} name={'Aditi Gupta'} role={'Designer'} />
                    <ContactCard image={img7} name={'Jai Khanna'} role={'Frontend Developer'} />
                    <ContactCard image={img8} name={'Nitu Sherawat'} role={'Backend Developer'} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
