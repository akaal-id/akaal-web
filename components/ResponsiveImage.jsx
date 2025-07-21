// components/ResponsiveImage.jsx
import React from 'react';
import { useState, useEffect } from "react";
import Image from "next/image";
import PropTypes from 'prop-types';

const ResponsiveImage = ({ desktopSrc, mobileSrc, alt, ...props }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth <= 425);
    };

    // Check immediately and add event listener
    checkWidth();
    window.addEventListener("resize", checkWidth);
    
    // Cleanup function
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <Image
      src={isMobile ? mobileSrc : desktopSrc}
      alt={alt}
      {...props}
    />
  );
};

// PropTypes validation
ResponsiveImage.propTypes = {
  desktopSrc: PropTypes.string.isRequired,
  mobileSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ResponsiveImage;