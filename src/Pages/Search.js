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
            <div className="mt-24 input-group">
              <input type="text" className="form-control rounded-start" placeholder="Search..." style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }} />
              <button className="btn btn-outline-secondary rounded-end" type="button" style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}>Search</button>
            </div>
          </div>
        </div>
        <div className=" row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="font-bold text-white text-xl card-header bg-secondary">Filters</div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <div className="mb-4">
                      <label className="font-semibold form-label text-black">Programming Skills</label>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="java" value="java" />
                        <label className="form-check-label text-black" htmlFor="java">
                          Java
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="python" value="python" />
                        <label className="form-check-label text-black" htmlFor="python">
                          Python
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="javascript" value="javascript" />
                        <label className="form-check-label text-black" htmlFor="javascript">
                          JavaScript
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="HTML" value="HTML" />
                        <label className="form-check-label text-black" htmlFor="HTML">
                          HTML
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="CSS" value="CSS" />
                        <label className="form-check-label text-black" htmlFor="CSS">
                          CSS
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="C++" value="C++" />
                        <label className="form-check-label text-black" htmlFor="C++">
                          C++
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-4">
                      <label className="font-semibold form-label text-black">CGPA</label>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="cgpa9" value="9" />
                        <label className="form-check-label text-black" htmlFor="cgpa9">
                          9+
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="cgpa8" value="8" />
                        <label className="form-check-label text-black" htmlFor="cgpa8">
                          8+
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="cgpa7" value="7" />
                        <label className="form-check-label text-black" htmlFor="cgpa7">
                          7+
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="cgpa6" value="6" />
                        <label className="form-check-label text-black" htmlFor="cgpa6">
                          6+
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-4">
                      <label className="font-semibold form-label text-black">Batch</label>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="2024" value="2024" />
                        <label className="form-check-label text-black" htmlFor="2024">
                          2024
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="2025" value="2025" />
                        <label className="form-check-label text-black" htmlFor="2025">
                          2025
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="2026" value="2026" />
                        <label className="form-check-label text-black" htmlFor="2026">
                          2026
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-4">
                      <label className="font-semibold form-label text-black">Frameworks</label>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="react" value="react" />
                        <label className="form-check-label text-black" htmlFor="react">
                          React.js
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="angular" value="angular" />
                        <label className="form-check-label text-black" htmlFor="angular">
                          Angular
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="vue" value="vue" />
                        <label className="form-check-label text-black" htmlFor="vue">
                          Vue.js
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="node" value="node" />
                        <label className="form-check-label text-black" htmlFor="node">
                          Node.js
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="express" value="express" />
                        <label className="form-check-label text-black" htmlFor="express">
                          Express.js
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
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
      <Footer />
    </div>
  );
}
