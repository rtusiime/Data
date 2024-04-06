import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const NavBar = React.memo(() => {
    return (
        <div className="navBar">
            <Header />
            <Link to="/">
                <button>🏠 Home</button>
            </Link>
            <Link to="/about">
                <button>ℹ️ About</button>
            </Link>
        </div>
    );
});

export default NavBar;