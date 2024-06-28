import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "./navItems";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  // handle scroll function
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.addEventListener("scroll", handleScroll);
    // };
  }, []);
  return (
    <div
      className={`navbar bg-base-100 max-w-screen-2xl container mx-auto px-5 fixed top-0 left-0 right-0 z-50   ${
        isSticky
          ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
          : ""
      } `}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="">
              <Link>Home</Link>
            </li>

            {navItems.map((item) => (
              <>
                <li>
                  <details>
                    <summary>{item.title}</summary>
                    <ul className="p-2">
                      {item?.subTitle?.map((subNav) => (
                        <li>
                          <Link to={subNav.to}>{subNav.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              </>
            ))}

            <li>
              <Link>Offers</Link>
            </li>
          </ul>
        </div>
        <div className="text-xl font-bold">
          <span className="bg-green px-2 rounded-md text-white">R</span>
          <span>aaZ</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1">
          <li className="text-green">
            <Link>Home</Link>
          </li>
          {navItems.map((item) => (
            <>
              <li>
                <details>
                  <summary>{item.title}</summary>
                  <ul className="p-2">
                    {item?.subTitle?.map((subNav) => (
                      <li>
                        <Link to={subNav.to}>{subNav.title}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            </>
          ))}

          <li>
            <Link>Offers</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <button className="btn rounded-full text-white px-8 bg-green">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
