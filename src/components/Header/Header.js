import "./Header.scss";
import Logo from "../../assets/icons/logo.svg";
import Menu from "../../assets/icons/menu.svg";


function Header() {
  return (
    <div className="header">
        <div className="header__left">
            <img src={Logo} alt='logo' className="header__logo"/>
        </div>
        <div className="header__right">
            <img src={Menu} alt="menu-burger" className="header__burger-icon" />
        </div>
    </div>
  )
}

export default Header