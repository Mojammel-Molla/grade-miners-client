import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserImg from '../assets/userImage.jpg';
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="mr-5">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="" className="mr-5">
          My assignment
        </NavLink>
      </li>
      <li>
        <NavLink to="" className="mr-5">
          Add assignment
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost font-extrabold lg:text-4xl">Grade Miners</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <img className="w-10 h-10 rounded-full" src={UserImg} />

        <Link to="/login">
          <button className="btn">Log in</button>
          {/* <a onClick={handleLogOut} className="btn">
            {user ? 'Log out' : 'Login'}
          </a> */}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
