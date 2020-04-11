import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* Component for the bar at the top of the page */
const Navbar = ({ icon, title }) => {
   return (
      <nav className='navbar bg-primary'>
         <h1>
            {/* An example of implementing a prop defined in App.js, title*/}
            <i className={icon} /> {title}
         </h1>
         <ul>
            <li>
               {/*<Link to> is used in place of <a href> to preserve list of users returned from a search when clicking a link}*/}
               <Link to='/'>Home</Link>
            </li>
            <li>
               <Link to='/about'>About</Link>
            </li>
         </ul>
      </nav>
   );
};

Navbar.defaultProps = {
   title: 'Github Finder',
   icon: 'fab fa-github'
};
/* This acts as a default if no props are written in App.js */

Navbar.propTypes = {
   title: PropTypes.string.isRequired,
   icon: PropTypes.string.isRequired
};
/* An example of working w/ prop types to type-check the props */

export default Navbar;
