import React, { useEffect } from 'react';
import img7 from '../images/img7.jpeg';
import Navbar from '../Components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { server } from '..';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { Context } from '..';
const profileData = {
    image: img7,
    name: "Jai Khanna",
    email: "iit2022005@iiita.ac.in",
    phoneNumber: "8360708882",
    batch: "BTech IT '26",
    summary: "I am a passionate software engineer with experience in web development. I enjoy learning new technologies and solving complex problems.",
    resume: ""
};

const Profile = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 })
    })

   const{setUser , setIsAuthenticated} = useContext(Context);
   
   useEffect(()=>{
    axios.get(`${server}/student/me`,{
        withCredentials: true
    }).then((res)=>{
        setUser(res.data.user);
        setIsAuthenticated(true);
    }).catch((err)=>{
        setUser({});
        toast.error('Error');
    })
   },[])
    
  
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
                                            <p className="text-muted mb-0">{profileData.mobile}</p>
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

export default Profile;
