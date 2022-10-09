import React from 'react';
import { NavLink } from 'react-router-dom';
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
                    <ul className='flex gap-3 text-white transition-all'>
                        <li className='hover:text-yellow-300'><NavLink 
                        className={({ isActive }) =>
                        isActive ? "text-yellow-300" : undefined
                      }
                        to="/orders">Order</NavLink></li>


                        <li className='hover:text-yellow-300'><NavLink 
                        className={({ isActive }) =>
                        isActive ? "text-yellow-300" : undefined
                      }
                        to="/review">Order Review</NavLink></li>


                        <li className='hover:text-yellow-300'><NavLink 
                        className={({ isActive }) =>
                        isActive ? "text-yellow-300" : undefined
                      }
                        to="/inventory">Manage Inventory</NavLink></li>


                        <li className='hover:text-yellow-300'><NavLink 
                        className={({ isActive }) =>
                        isActive ? "text-yellow-300" : undefined
                      }
                        to="/login">Login</NavLink></li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;