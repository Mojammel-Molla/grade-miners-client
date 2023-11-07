import { Link, NavLink } from 'react-router-dom';
import UserImg from '../assets/userImage.jpg';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';
const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navLinks = (
    <>
      <li className="mr-3">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-green-600 underline' : ' '
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="mr-3">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-green-600 underline' : ' '
          }
          to="/assignments"
        >
          Assignments
        </NavLink>
      </li>
      <li className="mr-3">
        <NavLink
          to="/create-assignment"
          className={({ isActive }) =>
            isActive ? 'text-green-600 underline' : ' '
          }
        >
          Create Assignments
        </NavLink>
      </li>
      <li className="mr-3">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-green-600 underline' : ' '
          }
          to="/submissions"
        >
          Submissions
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOutUser();
  };
  return (
    <div className="navbar bg-base-100 shadow-md mt-5">
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
        <a className="  font-extrabold lg:text-4xl">
          Grade <span className="text-green-600">Miners</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="group/item">
            <img
              className="w-10 mx-auto h-10 mr-6 rounded-full  "
              src={user?.photoURL}
            />
            <h4 className="mr-3 font-medium invisible group-hover/item:visible">
              {user?.displayName}
            </h4>
          </div>
        ) : (
          <img className="w-10 h-10 mr-3 rounded-full" src={UserImg} />
        )}

        <Link to="/login">
          <button
            onClick={handleLogOut}
            className="btn bg-green-600 text-white"
          >
            {user ? 'Log out' : 'Login'}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
