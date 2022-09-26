import "./Nav.scss";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <div className="nav">
        <nav className="nav__container">
          <Link to='/books' className="nav__link"><h2 className="nav__title">Books</h2></Link>
          <Link to='books/children' className="nav__link"><h3 className="nav__sub-title">Picture Books & Middle Grade</h3></Link>
          <Link to='books/young-adults' className="nav__link"><h3 className="nav__sub-title">Young Adult</h3></Link>
          <Link to='/about' className="nav__link"><h2 className="nav__title">About Eva</h2></Link>
          <Link to='/faq' className="nav__link"><h2 className="nav__title">Author FAQ</h2></Link>
          <Link to='/contacts' className="nav__link"><h2 className="nav__title">Contact Eva</h2></Link>
        </nav>

        <div className="nav__social">
            <a href='https://www.instagram.com/solskaeva/'><img src={Instagram} alt="instagram icon"/></a>
            <a href='https://www.instagram.com/solskaeva/'><img src={Facebook} alt="facebook icon"/></a>
        </div>
    </div>
  )
}

export default Nav;