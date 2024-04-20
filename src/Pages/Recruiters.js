import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Scroll from '../Components/Scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Recruiters = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  let list1 = ['ABB', 'Accenture', 'Accolite', 'Acko', 'Adverb Technologies', 'Adobe', 'Affine Analytics', 'Aganitha', 'Airtel', 'Airtel Wynk Profile', 'Altudo', 'Amazon', 'AMD', 'Amdocs', 'American Express', 'Analog Devices', 'Anand Rathi Private Wealth Management', 'ANZ', 'AppDynamics', 'Apple', 'Arcesium', 'Arista Networks', 'ARM', 'Aspiring Minds', 'Athena Owl', 'Atlassian', 'Autodesk', 'Avaya', 'Axis Bank', 'Axtria'];
  let list2 = ['Airtel Wynk Profile', 'Altudo', 'Amazon', 'AMD', 'Amdocs', 'American Express', 'Analog Devices', 'Anand Rathi Private Wealth Management', 'ABB', 'Accenture', 'Accolite', 'Acko', 'Adverb Technologies', 'Adobe', 'Affine Analytics', 'Aganitha', 'Airtel', 'ANZ', 'AppDynamics', 'Apple', 'Arcesium', 'Arista Networks', 'ARM', 'Aspiring Minds', 'Athena Owl', 'Atlassian', 'Autodesk', 'Avaya', 'Axis Bank', 'Axtria'];
  let list3 = ['Aganitha', 'Airtel', 'Airtel Wynk Profile', 'Altudo', 'Amazon', 'AMD', 'Amdocs', 'American Express', 'Analog Devices', 'Anand Rathi Private Wealth Management', 'ANZ', 'AppDynamics', 'Apple', 'Arcesium', 'Arista Networks', 'ARM', 'Aspiring Minds', 'Athena Owl', 'Atlassian', 'Autodesk', 'Avaya', 'Axis Bank', 'Axtria', 'ABB', 'Accenture', 'Accolite', 'Acko', 'Adverb Technologies', 'Adobe', 'Affine Analytics'];

  return (
    <div className='bg-dark p-10 md:p-20'>
      <Scroll />
      <Navbar />
      <h1 data-aos="fade-down" className='mt-10 text-3xl md:text-6xl font-bold text-white mb-10 text-center'>Our Recruiters</h1>
      <div data-aos="fade-up" className='mx-auto max-w-4xl mb-10 bg-white rounded-3xl shadow-lg p-5 flex flex-col md:flex-row md:space-x-8'>
        <div className='flex-1'>
          {list1.map((ele, index) => (
            <h1 key={index} className='text-lg'>{ele}</h1>
          ))}
        </div>
        <div className='flex-1'>
          {list2.map((ele, index) => (
            <h1 key={index} className='text-lg'>{ele}</h1>
          ))}
        </div>
        <div className='flex-1'>
          {list3.map((ele, index) => (
            <h1 key={index} className='text-lg'>{ele}</h1>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Recruiters;
