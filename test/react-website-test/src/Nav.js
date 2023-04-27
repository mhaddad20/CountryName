import React from 'react';
import './Nav.css';

export function Navbar() {

  const navbarImages = [
    'https://flagcdn.com/ie.svg',
    'https://flagcdn.com/io.svg',
    'https://flagcdn.com/fr.svg',
    'https://flagcdn.com/es.svg',
    'https://flagcdn.com/jp.svg',
    'https://flagcdn.com/br.svg',
    'https://flagcdn.com/de.svg',
    'https://flagcdn.com/it.svg',
    'https://flagcdn.com/cn.svg',
    'https://flagcdn.com/au.svg'
  ];
  
  return (
    <div className="navbar">
    <a href="#">AtlasFinder</a>
    <span>|</span>
    <a href="https://github.com/mhaddad20/CountryName" className='viewGithub'>View on Github</a>
    {navbarImages.map((img, index) => (
      <a href="#" key={index} className='navFlags'>
        <img src={img} alt={`Link ${index + 1}`} className='navbar-image' />
      </a>
    ))}
  </div>
  
  );
}
