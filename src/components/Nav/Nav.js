import "./Nav.scss";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import { Link } from "react-router-dom";

function Nav({handleClick}) {

  return (
    <div className="nav">
        <nav className="nav__container">
          <Link onClick={handleClick} to='/books' className="nav__link"><h2 className="nav__title">Books</h2></Link>
          <Link onClick={handleClick} to='/about' className="nav__link"><h2 className="nav__title">About Eva</h2></Link>
          <Link onClick={handleClick} to='/faq' className="nav__link"><h2 className="nav__title">Author FAQ</h2></Link>
          <Link onClick={handleClick} to='/contacts' className="nav__link"><h2 className="nav__title">Contact Eva</h2></Link>
        </nav>

        <div className="nav__social">
            <a href='https://www.instagram.com/solskaeva/'><img src={Instagram} alt="instagram icon"/></a>
            <a href='https://www.instagram.com/solskaeva/'><img src={Facebook} alt="facebook icon"/></a>
        </div>
    </div>
  )
}

export default Nav;