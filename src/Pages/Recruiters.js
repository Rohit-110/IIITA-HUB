import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Scroll from '../Components/Scroll';

const Recruiters = () => {
  let list1 = ['ABB', 'Accenture', 'Accolite', 'Acko', 'Adverb Technologies', 'Adobe', 'Affine Analytics', 'Aganitha', 'Airtel', 'Airtel Wynk Profile', 'Altudo', 'Amazon', 'AMD', 'Amdocs', 'American Express', 'Analog Devices', 'Anand Rathi Private Wealth Management', 'ANZ', 'AppDynamics', 'Apple', 'Arcesium', 'Arista Networks', 'ARM', 'Aspiring Minds', 'Athena Owl', 'Atlassian', 'Autodesk', 'Avaya', 'Axis Bank', 'Axtria'];
  let list2 = ['Airtel Wynk Profile', 'Altudo', 'Amazon', 'AMD', 'Amdocs', 'American Express', 'Analog Devices', 'Anand Rathi Private Wealth Management', 'ABB', 'Accenture', 'Accolite', 'Acko', 'Adverb Technologies', 'Adobe', 'Affine Analytics', 'Aganitha', 'Airtel', 'ANZ', 'AppDynamics', 'Apple', 'Arcesium', 'Arista Networks', 'ARM', 'Aspiring Minds', 'Athena Owl', 'Atlassian', 'Autodesk', 'Avaya', 'Axis Bank', 'Axtria'];
  let list3 = ['Aganitha', 'Airtel', 'Airtel Wynk Profile', 'Altudo', 'Amazon', 'AMD', 'Amdocs', 'American Express', 'Analog Devices', 'Anand Rathi Private Wealth Management', 'ANZ', 'AppDynamics', 'Apple', 'Arcesium', 'Arista Networks', 'ARM', 'Aspiring Minds', 'Athena Owl', 'Atlassian', 'Autodesk', 'Avaya', 'Axis Bank', 'Axtria', 'ABB', 'Accenture', 'Accolite', 'Acko', 'Adverb Technologies', 'Adobe', 'Affine Analytics'];

  return (
    <div className='bg-dark p-20'>  
        <Scroll/> 
      <Navbar />
      <div className='mx-24 mb-10 bg-white rounded-3xl shadow-lg p-5'>
        <h1 className='text-4xl font-semibold text-center mb-5 text-black font-serif'>Our Recruiters</h1>
        <div className='grid grid-cols-3 gap-4'>
          <div className=''>
            {list1.map((ele, index) => (
              <h1 key={index} className='text-lg'>{ele}</h1>
            ))}
          </div>
          <div className=''>
            {list2.map((ele, index) => (
              <h1 key={index} className='text-lg'>{ele}</h1>
            ))}
          </div>
          <div className=''>
            {list3.map((ele, index) => (
              <h1 key={index} className='text-lg'>{ele}</h1>
            ))}
          </div>
        </div>
      </div> 
      <Footer />
    </div>
  );
}

export default Recruiters;
