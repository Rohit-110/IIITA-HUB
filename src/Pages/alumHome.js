import React, { useEffect } from 'react';
import AlumNavbar from '../Components/AlumNavbar';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Scroll from '../Components/Scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AlumHome() { // corrected component name to start with uppercase
    useEffect(() => {
      AOS.init({ duration: 1500 });
    }, []); // added empty dependency array to run the effect only once
  
    const scrollToAbout = () => {
      const aboutSection = document.getElementById('about');
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    };
  
  return (
    <div className="main">
      <Scroll />
      <AlumNavbar />
      <header>
        <div id="intro" className="p-5 text-center bg-image h-screen " style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url('https://www.iiita.ac.in/uploads/carousel/12288_o303.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}>
          <div data-aos="zoom-in" className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Welcome to IIITA Hub</h1>
              <h5 className="mb-4">Empowering Innovations</h5>
              <p className="lead mb-4">IIITA Hub is a platform connecting students to alumni, where students can seek referrals from alumni and engage in meaningful conversations to gain insights and guidance for their career development.</p>
              <Link onClick={scrollToAbout} className="btn btn-outline-light btn-lg">Learn More</Link>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="py-5 flex justify-center items-center mb-4">
        <div data-aos="fade-down" className="container mt-5">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="lg:w-8/12">
              <h2 className="display mb-4">About Us</h2>
              <p className="text-center lg:text-left text-lg lead">
                IIITA Hub is a platform dedicated to fostering innovation and collaboration among students, faculty, and industry professionals. We provide resources, support, and opportunities for individuals and teams to turn their ideas into reality.
              </p>
              <p className="text-center lg:text-left text-lg">
                Our mission is to empower the next generation of innovators and entrepreneurs, driving positive change through technology and creativity.
              </p>
            </div>
            <div className="lg:w-6/12">
              <img src="https://placement.iiita.ac.in/assets/aboutImage.webp" alt="About Us" className="mx-auto lg:mx-0 lg:ml-6 my-6 lg:my-0 img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-8 bg-gray-100">
        <div className="container px-4 mx-auto">
          <div className="lg:w-8/12 mx-auto text-center mb-8">
            <h2 className="text-3xl font-semibold">Our Features</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-3">
            <div data-aos="fade-down" className="card bg-white shadow-md rounded-lg">
              <div className="card-body">
                <h5 className="text-xl font-semibold mb-2">Alumni Connection</h5>
                <p className="text-gray-700">Connect with alumni to seek referrals, guidance, and insights for your career development.</p>
              </div>
            </div>
            <div data-aos="fade-down" className="card bg-white shadow-md rounded-lg">
              <div className="card-body">
                <h5 className="text-xl font-semibold mb-2">Collaborative Environment</h5>
                <p className="text-gray-700">Engage with peers, mentors, and industry experts to collaborate on projects and expand your network.</p>
              </div>
            </div>
            <div data-aos="fade-down" className="card bg-white shadow-md rounded-lg">
              <div className="card-body">
                <h5 className="text-xl font-semibold mb-2">Personal Development</h5>
                <p className="text-gray-700">Enhance your skills and knowledge through workshops, courses, and hands-on projects tailored to your career goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
