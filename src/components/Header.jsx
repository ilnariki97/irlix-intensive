import React from 'react';
import Title from "./ui-kit/title";
import IrlixLogo from "./ui-kit/irlix-Logo";
import NavBar from "./NavBar"
function Header() {
    return (
        <div>
            <header className="header">
                <div className="header__container">
                   <Title/>
                   <IrlixLogo/>
                </div>
                <NavBar/>
            </header>

        </div>
    );
}

export default Header;
