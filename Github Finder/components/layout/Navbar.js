import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
   return (
      <nav className='navbar bg-primary'>
         <h1>
            <i className={icon} /> {title}
            {/*An example of implementing a prop defined in App.js, title */}
         </h1>
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
