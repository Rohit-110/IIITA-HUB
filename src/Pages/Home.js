import React from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Scroll from '../Components/Scroll';

export default function Home() {
  const scrollToAbout = () =>{
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior:'smooth' });
  }
  return (
    <div className="main">
      <Scroll/>
      <Navbar />
      <header>
        <div id="intro-example" className="p-5 text-center bg-image h-screen " style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url('https://www.iiita.ac.in/uploads/carousel/12288_o303.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Welcome to IIITA Hub</h1>
                <h5 className="mb-4">Empowering Innovations</h5>
                <p className="lead mb-4">IIITA Hub is a platform connecting students to alumni, where students can seek referrals from alumni and engage in meaningful conversations to gain insights and guidance for their career development.</p>
                <Link onClick={scrollToAbout} className="btn btn-outline-light btn-lg">Learn More</Link>
              </div>
          </div>
        </div>
      </header>

      <section id="about" className="py-5">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="display-4 mb-4">About Us</h2>
              <p className="lead">IIITA Hub is a platform dedicated to fostering innovation and collaboration among students, faculty, and industry professionals. We provide resources, support, and opportunities for individuals and teams to turn their ideas into reality.</p>
              <p>Our mission is to empower the next generation of innovators and entrepreneurs, driving positive change through technology and creativity.</p>
            </div>
            <div className="col-lg-6">
              <img src="https://via.placeholder.com/400" alt="About Us" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-5 bg-light">
        <div className="container">
          <h2 className="display-4 text-center mb-5">Our Features</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Alumni Connection</h5>
                  <p className="card-text">Connect with alumni to seek referrals, guidance, and insights for your career development.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Collaborative Environment</h5>
                  <p className="card-text">Engage with peers, mentors, and industry experts to collaborate on projects and expand your network.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Personal Development</h5>
                  <p className="card-text">Enhance your skills and knowledge through workshops, courses, and hands-on projects tailored to your career goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
