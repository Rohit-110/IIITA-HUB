import React from 'react';
import Navbar from '../Components/Navbar';
import Batch from '../Components/Batch';
import Footer from '../Components/Footer';
import Scroll from '../Components/Scroll';

export default function Home() {
  return (
    <div className='bg-dark'>
      <Scroll />
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="mt-28 input-group">
              <input type="text" className="form-control rounded-start" placeholder="Search..." style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }} />
              <button className="btn btn-outline-secondary rounded-end" type="button" style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}>Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <Batch />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
