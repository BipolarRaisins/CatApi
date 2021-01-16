import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";



 const Header = () => {
    return (
        <div className="header">
            <Link className="header__heading" to="/">VOTE</Link>
            <Link className="header__heading" to="/images">IMAGES/SEARCH</Link>
            <Link className="header__heading" to="/favourites">FAVOURITES</Link>
            <Link className="header__heading" to="/upload">UPLOAD</Link>
            <Link className="header__heading" to="/breed">BREED</Link>
        </div>
    )
}

export default Header;
