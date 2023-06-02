import React from 'react';
import { Link } from 'react-router-dom';


function Menu() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Add Movie</Link>
    </nav>
  );
}

export default Menu;
