import React from 'react';
import Navbar from '../Components/Navbar';
import Batch from '../Components/Batch';
import Footer from '../Components/Footer';
import Scroll from '../Components/Scroll';

export default function Home() {
  return (
    <div className='bg-dark'>
      <Scroll/>
      <Navbar />  
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-md-8"> 
            <div className="input-group mb-3 mt-24">
              <input type="text" className="form-control" placeholder="Search..." style={{ borderRadius: '20px 0 0 20px' }} />
              <button className="z-0 btn btn-outline-secondary" type="button" style={{ borderRadius: '0 20px 20px 0' }}>Search</button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
  <div className="col-md-8"> 
    <div className="card shadow">
      <div className="card-header">Filters</div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <div className="mb-3">
              <label className="form-label">Programming Skills</label>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="java" value="java" />
                <label className="form-check-label" htmlFor="java">
                  Java
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="python" value="python" />
                <label className="form-check-label" htmlFor="python">
                  Python
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="javascript" value="javascript" />
                <label className="form-check-label" htmlFor="javascript">
                  JavaScript
                </label>
              </div>
              {/* Add more programming languages as checkboxes */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label className="form-label">Languages</label>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="english" value="english" />
                <label className="form-check-label" htmlFor="english">
                  English
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="spanish" value="spanish" />
                <label className="form-check-label" htmlFor="spanish">
                  Spanish
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="french" value="french" />
                <label className="form-check-label" htmlFor="french">
                  French
                </label>
              </div>
              {/* Add more languages as checkboxes */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label className="form-label">Frameworks</label>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="react" value="react" />
                <label className="form-check-label" htmlFor="react">
                  React
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="angular" value="angular" />
                <label className="form-check-label" htmlFor="angular">
                  Angular
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="vue" value="vue" />
                <label className="form-check-label" htmlFor="vue">
                  Vue.js
                </label>
              </div>
              {/* Add more frameworks as checkboxes */}
            </div>
          </div>
        </div>
        {/* Add more filter options as needed */}
      </div>
    </div>
  </div>
</div>

      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <Batch batchyear="2026" />
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-12">
            <Batch batchyear="2025" />
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-12"> 
            <Batch batchyear="2024" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
