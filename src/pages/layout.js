/* eslint-disable react/prop-types */
'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Mobile from '../../components/Mobile';
import Footer from '../../components/Footer';
import AnimateOnScroll from '../../components/AnimateOnScroll';

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Optimized resize handler with debounce
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Debounce function
    const debounce = (func, wait) => {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    };

    const debouncedHandleResize = debounce(handleResize, 100);
    
    // Initial check
    handleResize();
    
    window.addEventListener('resize', debouncedHandleResize);
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);

  return (
    <>
      {isMobile ? <Mobile /> : <Navbar />}
      <AnimateOnScroll />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;