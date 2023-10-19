import "./App.css";
import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-menu">
      <button className={`dropdown-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
       
      </button>
      <div className={`dropdown-items ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Item 6</li>
          <li>Item 7</li>
          <li>Item 8</li>
          <li>Item 9</li>
          <li>Item 10</li>
          
          
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;


