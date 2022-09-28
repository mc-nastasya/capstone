import "./Footer.scss";
import FooterLogo from '../../assets/images/logo-footer.png';
import PaperTexture from '../../assets/images/texture.png';
import { Link } from "react-router-dom";
import Facebook from '../../assets/icons/SM.svg';
import Instagram from '../../assets/icons/inst.svg';
import {scrollToTop} from '../../utilities/utilities';

function Footer() {
  return (
    <div className="footer__background">
        <img src={PaperTexture} alt='background texture' className="footer__texture"/>
        <div className="footer">
            <Link onClick={scrollToTop} className="footer__logo-link" to='/'><img src={FooterLogo} alt='logo' className="footer__logo" /></Link>
            <div className="footer__top">
                  <div className="footer__list-container">
                    <Link onClick={scrollToTop} className="footer__link" to='/books'><h3 className="footer__nav-item">Books</h3></Link>
                    <Link onClick={scrollToTop} to='faq' className="footer__link"><h3 className="footer__nav-item">Author FAQ</h3></Link>
                  </div>
                  <div className="footer__list-container">
                    <Link onClick={scrollToTop} to='/about' className="footer__link"><h3 className="footer__nav-item">About Eva</h3></Link>
                    <Link onClick={scrollToTop} to='contacts' className="footer__link"><h3 className="footer__nav-item">Contact Eva</h3></Link>
                  </div>
                  <div className="footer__social-container">
                    <Link onClick={scrollToTop} className="footer__logo-link-not-mobile" to='/'><img src={FooterLogo} alt='logo' className="footer__logo-not-mobile" /></Link>
                    <div className="footer__social">
                      <a href="https://www.instagram.com/solskaeva/"><img src={Instagram} alt='instagram logo' className="footer__social-icon"/></a>
                      <a href='https://www.facebook.com/solskaeva'><img src={Facebook} alt='facebook logo' className="footer__social-icon"/></a>
                    </div>
                  </div>
            </div>
            <div className="footer__bottom">
              <div className="footer__privacy-container">
                <p className="footer__privacy">privacy policy</p>
                <p className="footer__privacy">terms & conditions</p>
              </div>
                <p className="footer__owner">©️ Eva Solska | 2022</p>
            </div>
        </div>
    </div>
  )
}

export default Footer