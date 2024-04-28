import React, { useEffect, useRef } from 'react';
import img7 from '../images/img7.jpeg';
import Navbar from '../Components/Navbar';
import AOS from 'aos';
import emailjs from 'emailjs-com';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const profileData = {
    image: img7,
    name: "Jai Khanna",
    email: "iit2022005@iiita.ac.in",
    phoneNumber: "8360708882",
    batch: "BTech IT '26",
    summary: "I am a passionate software engineer with experience in web development. I enjoy learning new technologies and solving complex problems.",
    resume: ""
};
const handleReferral = () => {
    const refID = document.getElementById('ref');
    refID.innerText = "Mail sent succesfully!";
    refID.style.backgroundColor = "green";
    refID.style.borderColor = "green";
}
const JaiProfile = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7wlx7vj', 'template_wzuy5lh', form.current, 'UhsVpG8aJzI8gERVm')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                alert('Mail has been sent!');
                form.current.reset();
            }, (error) => {
                console.error('Email sending failed:', error.text);
                alert('Oops! Something went wrong. Please try again later.');
            });
    };
    useEffect(() => {
        AOS.init({ duration: 1500 })
    })
    return (
        <div>
            <Navbar />
            <section className='bg-dark'>
                <div className="container py-28">
                    <div className="row">
                        <div data-aos="fade-right" className="p-3 col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center d-flex flex-column align-items-center">
                                    <img src={profileData.image} alt="avatar" className="rounded-circle" style={{ width: "150px" }} />
                                    <h5 className="my-3">{profileData.name}</h5>
                                    <p className="text-muted mb-4">{profileData.summary}</p>
                                    <form ref={form} onSubmit={sendEmail}>
                                        <input type="hidden" name="to_name" value={profileData.name} />
                                        <input type="hidden" name="user_email" value={profileData.email} />
                                        <button id="ref" type="submit" className="border-2 text-white border-blue-500 border-solid rounded bg-blue-500 p-2 hover:bg-blue-600">Ask for Referral</button>
                                    </form>

                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left" className="p-4 col-lg-8">
                            <div className="card mb-10 ">
                                <div className="card-body ">
                                    <div className="row p-1.5">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Full Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{profileData.name}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row p-1.5">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{profileData.email}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row p-1.5">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Phone</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{profileData.phoneNumber}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row p-1.5">
                                        <div className="col-sm-3">
                                            <p className="mb-1">Batch</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{profileData.batch}</p>
                                        </div>
                                    </div><hr />
                                    <div className="row p-1.5">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Resume</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <Link to={profileData.resume}><p className="text-muted mb-0">Link</p></Link>
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

export default JaiProfile;
