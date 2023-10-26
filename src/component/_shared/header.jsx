import React from "react";
import './site.scss';
import Logo from '../../logo.svg';

const Header = (props) => {
    return (<>
        <header className="app-header">
            <nav>
                <div className="logo">
                    <img src={Logo} alt='React Logo'></img>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Houses</li>
                </ul>
                <div>
                </div>
            </nav>
        </header>
    </>);
}

export default Header;