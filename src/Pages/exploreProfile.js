import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { server } from '..';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ExploreProfile = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 })
    }, []);

    const { id } = useParams();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`${server}/student/profile/${id}`);
                setProfile(response.data);
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchProfile();
    }, [id]);

    if (!profile) {
        return <div>Loading...</div>;
    }

    const handleReferral = () => {
        const refID = document.getElementById('ref');
        refID.innerText = "Mail sent successfully!";
        refID.style.backgroundColor = "green";
        refID.style.borderColor = "green";
    }

    return (
        <div>
            <Navbar />
            <section className='bg-dark'>
                <div className="container py-28">
                    <div className="row">
                        <div data-aos="fade-right" className="p-3 col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center d-flex flex-column align-items-center">
                                    <img src={profile.image} alt="avatar" className="rounded-circle" style={{ width: "150px" }} />
                                    <h5 className="my-3">{profile.name}</h5>
                                    <p className="text-muted mb-4">{profile.summary}</p>
                                    <button id="ref" onClick={handleReferral} className="border-2 text-white border-blue-500 border-solid rounded bg-blue-500 p-2 hover:bg-blue-600">
                                        Ask for Referral
                                    </button>
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
                                            <p className="text-muted mb-0">{profile.name}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row p-1.5">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{profile.email}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row p-1.5">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Phone</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{profile.phoneNumber}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row p-1.5">
                                        <div className="col-sm-3">
                                            <p className="mb-1">Batch</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{profile.batch}</p>
                                        </div>
                                    </div><hr />
                                    <div className="row p-1.5">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Resume</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <Link to={profile.resume}><p className="text-muted mb-0">Link</p></Link>
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

export default ExploreProfile;
