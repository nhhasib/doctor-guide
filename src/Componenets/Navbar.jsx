import React from "react";
import logo from "../assets/images/logo.png";
import text from "../assets/images/Doctor Guide.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#273240]">
      <div className="navbar text-white w-11/12 mx-auto flex flex-col justify-between lg:flex-row">
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 text-black"
            >
              <li tabIndex={0}>
                <details>
                  <summary>Home</summary>
                  <ul className="p-2 text-black">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Features</summary>
                  <ul className="p-2 text-black">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Departments</summary>
                  <ul className="p-2 text-black">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Event</summary>
                  <ul className="p-2 text-black">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Contact us</a>
              </li>
            </ul>
          </div>
          <Link to={'/'} className="normal-case text-xl">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" />
              <img src={text} alt="" />
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase">
            <li tabIndex={0}>
              <details>
                <summary>Home</summary>
                <ul className="p-2 my-8 text-black bg-yellow-400">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={1}>
              <details>
                <summary>Features</summary>
                <ul className="p-2 text-black">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={2}>
              <details>
                <summary>Departments</summary>
                <ul className="p-2 text-black">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={3}>
              <details>
                <summary>Event</summary>
                <ul className="p-2 text-black">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5 my-4">
          <a className="">
            <Button text="login"></Button>
          </a>
          <a className="">
            <Button text="signup"></Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
