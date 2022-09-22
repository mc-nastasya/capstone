import "./Footer.scss";
import FooterLogo from '../../assets/images/logo-footer.png';
import PaperTexture from '../../assets/images/texture.png';
import { Link } from "react-router-dom";
import Facebook from '../../assets/icons/SM.svg';
import Instagram from '../../assets/icons/inst.svg';

function Footer() {
  return (
    <div className="footer__background">
        <img src={PaperTexture} alt='background texture' className="footer__texture"/>
        <div className="footer">
            <div className="footer__top">
                  <Link to='/'><img src={FooterLogo} alt='logo' className="footer__logo" /></Link>
                  <Link className="footer__link" to='/books'><h3 className="footer__nav-item">Books</h3></Link>
                  <Link className="footer__link"><h4 className="footer__nav-subitem">Upcoming Trilogy</h4></Link>
                  <Link className="footer__link"><h4 className="footer__nav-subitem">Picture Books & Middle Grade</h4></Link>
                  <Link className="footer__link"><h4 className="footer__nav-subitem">Young Adult</h4></Link>
                  <Link className="footer__link"><h3 className="footer__nav-item">About Eva</h3></Link>
                  <Link className="footer__link"><h3 className="footer__nav-item">Author FAQ</h3></Link>
                  <Link className="footer__link"><h3 className="footer__nav-item">Contact Eva</h3></Link>
                  <div className="footer__social">
                    <img src={Instagram} alt='instagram logo' className="footer__social-icon"/>
                    <img src={Facebook} alt='facebook logo' className="footer__social-icon"/>
                  </div>
            </div>
            <div className="footer__bottom">
                <p className="footer__privacy">privacy policy</p>
                <p className="footer__privacy">terms & conditions</p>
                <p className="footer__owner">©️ Eva Solska | 2022</p>
            </div>
        </div>
    </div>
  )
}

export default Footer