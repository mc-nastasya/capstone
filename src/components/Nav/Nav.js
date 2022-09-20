import "./Nav.scss";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";

function Nav() {
  return (
    <div className="nav">
        <nav className="nav__container">
          <h2 className="nav__title">Books</h2>
          <h4 className="nav__sub-title">Picture Books & Middle Grade</h4>
          <h4 className="nav__sub-title">Young Adult</h4>
          <h2 className="nav__title">About Eva</h2>
          <h2 className="nav__title">Author FAQ</h2>
          <h2 className="nav__title">Contact Eva</h2>
        </nav>

        <div className="nav__social">
            <img src={Instagram} alt="instagram icon"/>
            <img src={Facebook} alt="facebook icon"/>
        </div>
    </div>
  )
}

export default Nav;