import React, { useEffect } from 'react';
import img7 from '../images/img7.jpeg';
import Navbar from '../Components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
const profileData = {
    image: img7,
    name: "Jai Khanna",
    email: "iit2022005@iiita.ac.in",
    phoneNumber: "8360708882",
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS", "SQL"],
    batch: 2026,
    degree: "BTech IT",
    cgpa: 8.03,
    summary: "I am a passionate software engineer with experience in web development. I enjoy learning new technologies and solving complex problems."
};

const Profile = () => {
    useEffect(()=>{
        AOS.init({duration:1500})
    })
    return (
        <div>
            <Navbar />
            <section className='bg-dark'>
                <div className="container py-20">
                    <div className="row">
                        <div data-aos="fade-right" className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center d-flex flex-column align-items-center">
                                    <img src={profileData.image} alt="avatar" className="rounded-circle" style={{ width: "150px" }} />
                                    <h5 className="my-3">{profileData.name}</h5>
                                    <p className="text-muted mb-4">{profileData.summary}</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left" className="col-lg-8">
                            <div className="card mb-10">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Full Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{profileData.name}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{profileData.email}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Phone</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{profileData.phoneNumber}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-1">Batch</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{profileData.batch}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-1">Degree</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{profileData.degree}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Skills</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{profileData.skills.join(', ')}</p> {/* Join the array elements */}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">CGPA</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{profileData.cgpa}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;
