import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-links">
          {/* <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/bucketlist" className={({ isActive }) => isActive ? 'active' : ''}>
              Bucket List
            </NavLink>
          </li>
          <li>
            <NavLink to="/places" className={({ isActive }) => isActive ? 'active' : ''}>
              Places to Visit
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 