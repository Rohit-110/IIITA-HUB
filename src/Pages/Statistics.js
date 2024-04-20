import React from 'react';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Scroll from '../Components/Scroll';

const Statistics = () => {
    return (
        <div className='bg-dark min-h-screen'>
            <Scroll/>
            <Navbar />
            <div className='container mx-auto p-20'>
                <h1 className='text-4xl md:text-6xl font-bold text-white mb-10 text-center'>Placement Statistics</h1>
                <div className='bg-white rounded-xl p-8 grid grid-cols-2 gap-8'>
                    <img src={img1} alt="Statistics 1" className='w-full h-full object-cover' />
                    <img src={img2} alt="Statistics 2" className='w-full h-full object-cover' />
                    <img src={img3} alt="Statistics 3" className='w-full h-full object-cover' />
                    <img src={img4} alt="Statistics 4" className='w-full h-full object-cover' />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Statistics;
