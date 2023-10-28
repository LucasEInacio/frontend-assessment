import React from "react";
import './site.scss';
import Logo from '../../logo.svg';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (<>
        <header className="app-header">
            <nav>
                <div className="logo">
                    <img src={Logo} alt='React Logo'></img>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/House">Houses</Link></li>
                </ul>
                <div>
                </div>
            </nav>
        </header>
    </>);
}

export default Header;