import React from 'react';
import logo from '../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <div className="container-md flex justify-between py-4 items-center">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <ul className='flex'>
                        <li><a className='text-white mx-3 hover:text-amber-400 transition-all' href="">Order</a></li>
                        <li><a className='text-white mx-3 hover:text-amber-400 transition-all' href="">Order Review</a></li>
                        <li><a className='text-white mx-3 hover:text-amber-400 transition-all' href="">Manage Inventory</a></li>
                        <li><a className='text-white mx-3 hover:text-amber-400 transition-all' href="">Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;