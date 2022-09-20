import { NavLink } from 'react-router-dom';
import './NavBar.scss';


function NavBar() {
  return (
    <nav className='nav-bar'>
        <NavLink className='nav-bar__link'>
            Books
        </NavLink>
        <NavLink className='nav-bar__link'>
            About Eva
        </NavLink>
        <NavLink className='nav-bar__link'>
            Author FAQ
        </NavLink>
        <NavLink className='nav-bar__link'>
            Contact
        </NavLink>
    </nav>
  )
}

export default NavBar