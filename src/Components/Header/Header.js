import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link, Navigate, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContexts';
import logo from '../images/Logo.svg';
import './Header.css'
const Header = () => {


  const {user, logout} = useContext(AuthContext);

  const handleLogOut = () => {
    logout()
    .then( () => {})
    .catch(() => {})

  }
    return (
        <nav className='header'>
            <div className="container-md flex justify-between py-4 items-center">
                <div>
                    <Link to={'/'}><img src={logo} alt="" /></Link>
                </div>
                <div>
                    <ul className='flex gap-3 text-white items-center transition-all'>
                    <li className='hover:text-yellow-300'><NavLink 
                        className={({ isActive }) =>
                        isActive ? "text-yellow-300" : undefined
                      }
                        to="/home">Home</NavLink></li>
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


                        {user?.uid ? 
                        <>
                          <small></small>
                          <button 
                          onClick={handleLogOut} 
                          className='btn btn-sm bg-yellow-700 text-white'>
                            Log Out
                            <FontAwesomeIcon
                            className='mx-1' 
                            icon={faArrowRight}></FontAwesomeIcon>
                            <span
                            className='text-slate-400'
                            >{user.email.slice(0, 3)}</span>
                          </button>
                        </>
                        :
                        <li className='hover:text-yellow-300'><NavLink 
                        className={({ isActive }) =>
                        isActive ? "text-yellow-300" : undefined
                      }
                        to="/login">Login / SignUp</NavLink></li>  
                      }
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;