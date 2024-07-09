import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { server } from '..';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Scroll from '../Components/Scroll';
import Card from '../Components/Card';

export default function Home() {
  const [alumni, setAlumni] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const response = await axios.get('${server}/student/alumni');
          setAlumni(response.data);
          console.error('Unexpected response format:', response.data);
      } catch (err) {
        console.error('Error fetching alumni:', err);
      }
    };

    fetchAlumni();
  }, []);

  const filteredAlumni = alumni.filter(alumni =>
    alumni.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='bg-dark'>
      <Scroll />
      <Navbar /> 
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="mt-28 input-group">
              <input
                type="text"
                className="form-control rounded-start"
                placeholder="Search..."
                style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button
                className="btn btn-outline-secondary rounded-end"
                type="button"
                style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="bg-white p-2 rounded-lg mb-6 overflow-hidden justify-center items-center">
              <h3 className="mt-2 text-2xl font-bold mb-4 text-gray-800">Alumni</h3>
              <div className="flex flex-wrap justify-center items-center gap-3">
                {filteredAlumni.map((alumni, index) => (
                  <Card key={index} data={alumni} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
