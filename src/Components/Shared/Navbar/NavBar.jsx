import React from 'react';
import Logo from '../../../assets/logo.png';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router';
import MyNavLink from '../MyNavLink/MyNavLink';

const NavBar = () => {
    return (
        <div className='bg-base-100 shadow-md sticky top-0 z-50'>
            <div className="navbar container mx-auto px-4">

                {/* LEFT SIDE */}
                <div className="navbar-start">

                    {/* MOBILE DROPDOWN */}
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>

                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[100] p-3 shadow bg-base-100 rounded-box w-52">

                            <li><MyNavLink to='/'>Home</MyNavLink></li>
                            <li><MyNavLink to='/apps'>Apps</MyNavLink></li>
                            <li><MyNavLink to='/installedApps'>Installation</MyNavLink></li>

                        </ul>
                    </div>

                    {/* LOGO */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src={Logo} alt="logo" className='w-10 h-10' />
                        <span className="font-bold text-lg hidden sm:block">HERO.IO</span>
                    </Link>

                </div>

                {/* CENTER MENU (DESKTOP) */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2 px-1">

                        <li><MyNavLink to='/'>Home</MyNavLink></li>
                        <li><MyNavLink to='/apps'>Apps</MyNavLink></li>
                        <li><MyNavLink to='/installedApps'>Installation</MyNavLink></li>

                    </ul>
                </div>

                {/* RIGHT SIDE */}
                <div className="navbar-end">

                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="btn bg-[#8e53ee] text-white hover:bg-[#7a3fe0] transition"
                    >
                        <FaGithub className="text-lg" />
                        <span className="hidden sm:inline">Contribute</span>
                    </a>

                </div>

            </div>
        </div>
    );
};

export default NavBar;