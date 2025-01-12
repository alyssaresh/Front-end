import React, { useState } from 'react';
import './HeaderMenu.css'; // Import the CSS file for styles
import { Link } from 'react-router-dom';



function HeaderMenu() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // State to handle search input

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query as the user types
  };

  const menus = [
    {
          title: 'Home',
        },
    {
      title: 'Movies',
      submenu: ['Die Hard', 'Toy Story', 'The Godfather'],
    },
    {
      title: 'Series',
      submenu: ['Breaking Bad', 'Stranger Things', 'The Crown'],
    },
    {
      title: 'Documentaries',
      submenu: ['Planet Earth', 'The Last Dance', 'Making a Murderer'],
    },
  ];

  return (
    <header>
      <nav>
        <ul className="menu">
          {menus.map((menu, index) => (
            <li
              key={index}
              className="menu-item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            ><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              {menu.title}</Link>
            </li>
          ))}
      <li className="search-item">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange} // Update the state when input changes
                    className="search-box"
                  />
                </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderMenu;
