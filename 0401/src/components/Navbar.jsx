import React from 'react';

const Navbar = ({ links }) => {
  return (
    <nav className="navbar">
      {links.map((link, index) => (
        <a key={index} href={link.url} className="orbitron">
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
