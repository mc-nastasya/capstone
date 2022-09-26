import "./Header.scss";
import Logo from "../../assets/icons/logo.svg";
import MenuLogo from "../../assets/icons/menu.svg";
import Cross from "../../assets/icons/cross.svg";
import { useState } from "react";
import Nav from "../Nav/Nav";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";



function Header() {
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(!menu);
        console.log(menu);
    }

    const handleLogoClick = () => {
        setMenu(false);
    }

    return (
        <>
            <div className={`header ${menu? 'fixed' : null}`}>
                <div className="header__left">
                    <Link to='/' onClick={handleLogoClick}><img src={Logo} alt='logo' className="header__logo"/></Link>
                </div>
                <div className="header__right">
                    <img src={!menu ? MenuLogo : Cross} onClick={handleClick} alt="menu-burger" className="header__burger-icon" />
                    <NavBar />
                </div>
            </div>
            {menu? <Nav handleClick={handleClick}/> : null}
        </>
    )
}

export default Header;