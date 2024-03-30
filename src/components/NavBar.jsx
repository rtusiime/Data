import React from 'react';
import Header from './Header';

const NavBar = ({ onSearch }) => {
    return (
        <div className="navBar">
                  <Header />
            <button>🏠 Dashboard</button>
            <button>ℹ️ About</button>
            <form onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="text"
                    placeholder="Search by city"
                    onChange={onSearch}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default NavBar;