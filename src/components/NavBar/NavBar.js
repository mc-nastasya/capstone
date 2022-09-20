import { NavLink } from 'react-router-dom';
import './NavBar.scss';


function NavBar() {
  return (
    <nav className='nav-bar'>
        <NavLink to='/books' className='nav-bar__link'>
            Books
        </NavLink>
        <NavLink to='/about' className='nav-bar__link'>
            About Eva
        </NavLink>
        <NavLink to='/FAQ' className='nav-bar__link'>
            Author FAQ
        </NavLink>
        <NavLink to='contacts' className='nav-bar__link'>
            Contact
        </NavLink>
    </nav>
  )
}

export default NavBar