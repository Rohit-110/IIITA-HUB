import React, { useEffect, useState } from 'react'

export default function Scroll() {

      const [scrollWidth, setScrollWidth] = useState(0);
    
      useEffect(() => {
        const updateScrollWidth = () => {
          const winScroll = document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (winScroll / height) * 100;
          setScrollWidth(scrolled);
        };
    
        window.addEventListener('scroll', updateScrollWidth);
    
        return () => window.removeEventListener('scroll', updateScrollWidth);
      }, []);
  return (
    <div>
        <div
        className="fixed mt-2 top-16 left-1/2 transform -translate-x-1/2 bg-dark h-2 z-2"
        style={{ width: `${scrollWidth}%`, transition: 'width 0.1s ease-in-out' }}
      /> 
    </div>
  )
}
