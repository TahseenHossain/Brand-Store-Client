import { NavLink } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
  const { logOut } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.ibb.co/yhFLYDb/user.png");
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch(
          `http://localhost:5000/user/${user.email}`
        );
        const userData = await userResponse.json();

        setName(userData.name);  
        setImage(userData.photoURL);
        
        setLoading(false);
      } catch (error) {
        //console.error(error);
        setLoading(false);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user]);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Out"))
      .catch((error) => console.error(error));
  };

  
  const navLinks = (
    <>
      <ul className="flex text-3xl">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/AddElement"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            Add Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/MyCarts"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            MyCart
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/LogIn"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            LogIn
          </NavLink>
        </li>
      </ul>
    </>
  );

  return (
    <div className="navbar text-red-600">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-80"
          >
            {navLinks}
          </ul>
        </div>
        <img
          className="h-20 w-20"
          src="https://i.ibb.co/Jyz3H0R/modern-logo-design-of-sports-car-shield-silhouette-logo-automotive-car-showroom-car-dealer-logo-desi.jpg"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="ml-40 md:ml-12lg:ml-12 flex flex-col lg:flex-row">
          {user && <span className="relative">{name}</span>}
          <a
            onClick={handleLogOut}
            className="btn text-red-600 sm:w-20 md:w-32 ml-40 md:ml-0 lg:ml-0  "
          >
            Sign Out
          </a>
        </div>

        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {user && (
              <div className="w-10 rounded-full">
                <div className="relative">
                  <img
                    src={image}
                    alt="User Profile"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default Header;
