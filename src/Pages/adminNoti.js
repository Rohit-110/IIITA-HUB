import React, { useState } from 'react';
import Scroll from '../Components/Scroll';
import AdminNavbar from '../Components/AdminNavbar';
import Footer from '../Components/Footer';
import axios from 'axios';
import { useContext } from 'react';
import { Context } from '../index';
import { server } from '../index';
import toast from 'react-hot-toast';

const AdminNoti = () => {
  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const [isread, setisread] = useState('false');

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        let { data } = await axios.post(`${server}/admin/notification`, {
            title, description, isread
        }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
        toast.success("Notification Sent");
        setIsAuthenticated(true);
    } catch (err) {
        toast.error("Error");
    }
};


  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 bg-dark">
      <Scroll />
      <AdminNavbar />
      <div className="mt-20 ml-4 mb-4 text-white">
        <h1 className="text-3xl font-bold mb-8">Send notification</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 w-96 ml-96">
            <label htmlFor="title" className="block text-white text-xl font-medium mb-2">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e)=>{setTitle(e.target.value)}}
              className="w-full bg-white border border-gray-600 text-black py-2 px-3 rounded-md placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              placeholder="Enter title"
              required
            />
          </div>
          <div className="mb-4 w-96 ml-96">
            <label htmlFor="content" className="block text-white text-xl font-medium mb-1">Content</label>
            <textarea
              id="content"
              value={description}
              onChange={(e)=>{setdescription(e.target.value)}}
              className="w-full h-32 bg-white border border-gray-600 text-black py-2 px-3 rounded-md resize-none placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              placeholder="Enter content"
              required
            ></textarea>
          </div>
          <div className='mr-10'>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Notification
            </button>
          </div>
        </form>
      </div>
      <hr/>
      <Footer/>
    </div>
  );
};

export default AdminNoti;
