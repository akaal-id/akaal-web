// components/Loader.jsx
"use client";

import React from 'react'; // Added React import
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#040016',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      flexDirection: 'column',
      gap: '20px'
    }}>
      <PuffLoader 
        color="#7939cc" 
        size={80} 
        speedMultiplier={1.5}
      />
      <p style={{
        color: 'white',
        fontSize: '1.2rem',
        marginTop: '20px'
      }}>Loading...</p>
    </div>
  );
};

export default Loader;