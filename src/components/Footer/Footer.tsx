import React from 'react';

const Footer = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h5>Welcome to Medium Lite</h5>
      <p> Copyright &copy; {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
