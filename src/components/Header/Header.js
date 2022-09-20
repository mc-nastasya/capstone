import "./Header.scss";
import Logo from "../../assets/icons/logo.svg";
import MenuLogo from "../../assets/icons/menu.svg";
import Cross from "../../assets/icons/cross.svg";
import { useState } from "react";
import Nav from "../Nav/Nav";



function Header() {
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(!menu);
        console.log(menu);
    }

    return (
        <>
            <div className="header">
                <div className="header__left">
                    <img src={Logo} alt='logo' className="header__logo"/>
                </div>
                <div className="header__right">
                    <img src={!menu ? MenuLogo : Cross} onClick={handleClick} alt="menu-burger" className="header__burger-icon" />
                </div>
            </div>
            {menu? <Nav /> : null}
        </>
    )
}

export default Header;