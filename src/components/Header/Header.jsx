import React from 'react';
import "./Header.scss";
import IrlixLogo from "../ui-kit/irlix-Logo";

import NavBar from "../navBar/NavBar";

export function Header() {
    return (
        <div>
            <header className="header">
                <div className="header__container">
                    <div className="header__title">
                        <h1 className="header__pageName">Главная</h1>
                        <p className="header__date">17 июля 2021</p>
                    </div>
                   <IrlixLogo/>
                </div>
                <NavBar/>
            </header>
        </div>
    );
}

export default {Header};
