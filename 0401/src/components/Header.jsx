import React from 'react';

const Header = ({ title, subtitle }) => {
  return (
    <div className="header-container">
      <h1 className="header-title orbitron">{title}</h1>
      {subtitle && <h3 className="header-subtitle">{subtitle}</h3>}
    </div>
  );
};

export default Header;
