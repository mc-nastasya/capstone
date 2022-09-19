import "./Header.scss";
import Logo from "../../assets/icons/logo.svg";
import Menu from "../../assets/icons/menu.svg";
import { useState } from "react";


function Header() {
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(true);
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src={Logo} alt='logo' onClick={handleClick} className="header__logo"/>
            </div>
            <div className="header__right">
                <img src={Menu} alt="menu-burger" className="header__burger-icon" />
            </div>
        </div>
    )
}

export default Header