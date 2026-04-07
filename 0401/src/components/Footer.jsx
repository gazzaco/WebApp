import React from 'react';

const Footer = ({ author, year }) => {
  return (
    <footer className="footer">
      <span className="orbitron">GRAVITY ZERO GALLERY</span>
      <p>&copy; {year} Designed by {author}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
