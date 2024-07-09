import React, { useEffect } from 'react';
import img7 from '../images/img7.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AdminNavbar from '../Components/AdminNavbar';
import axios from 'axios';
import { server } from '../index';
import { useContext } from 'react';
import { Context } from '../index';
import { useState } from 'react';
import toast from 'react-hot-toast';

const profileData = {
    image: img7,
    name: "Jai Khanna",
    email: "iit2022005@iiita.ac.in",
    phoneNumber: "8360708882",
    batch: "BTech IT '26",
    summary: "I am a passionate software engineer with experience in web development. I enjoy learning new technologies and solving complex problems.",
    resume: ""
};

const AdminProfile = () => {
    
  const {isAuthenticated, setIsAuthenticated}= useContext(Context);

    useEffect(() => {
        AOS.init({ duration: 1500 })
    })
   

    const [appliers,setAppliers]=useState([]);

    useEffect(()=>{
      axios.get(`${server}/admin/me`,{
        withCredentials: true,
      }).then((res)=>{
        console.log(res);
        setAppliers(res.data.admin);
        setIsAuthenticated(true);
        toast.success('Success hai bro');
      }).catch((error)=>{
        toast.error('Error hai bhai');
      })
    
    },[]);
  

    return (
        <div>
            <AdminNavbar />
            <section className='bg-dark'>
                <div className="container py-28">
                    <div className="row">
                        <div data-aos="fade-right" className="p-3 col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center d-flex flex-column align-items-center">
                                    <img src={appliers.photo} alt="avatar" className="rounded-circle" style={{ width: "150px" }} />
                                    <p className="text-muted mb-4">{profileData.summary}</p>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left" className="p-4 col-lg-8">
                            <div className="card mt-14  ">
                                <div className="card-body ">
                                    <div className="row p-1.5">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Full Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0"><h5>{appliers.name}</h5></p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row p-1.5">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0"><h5>{appliers.email}</h5></p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row p-1.5">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Phone</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0"><h5>{appliers.mobile}</h5></p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdminProfile;
