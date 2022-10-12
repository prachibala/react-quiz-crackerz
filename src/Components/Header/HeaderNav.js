import React, { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./HeaderNav.css";

const HeaderNav = () => {
    const [dropdownState, setDropdownState] = useState(false);

    const handleNav = () => {
        setDropdownState(!dropdownState);
    };

    return (
        <>
            <div className="nav">
                <div className="container d-flex justify-content-between  align-items-center justify-content-center p-2">
                    <div className="nav-left">
                        <img className="logo" src={logo} alt="" />
                        <div className="ps-2">
                            <h4 className="m-0" style={{ color: "#405073" }}>
                                Quize{" "}
                                <span style={{ color: "#FABE2C" }}>Zone</span>
                            </h4>
                            <p className="m-0 ">
                                <small
                                    className="m-0"
                                    style={{ color: "#45567C" }}
                                >
                                    Happy Education
                                </small>
                            </p>
                        </div>
                    </div>

                    <div className="nav-right">
                        <Link to="/">Home</Link>
                        <Link to="topic">Topics</Link>
                        <Link to="stats">Statistics</Link>
                        <Link to="blog">Blog</Link>
                    </div>

                    <button className="nav-burger" onClick={handleNav}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="48px"
                            viewBox="0 0 24 24"
                            width="48px"
                            fill="#000000"
                        >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
                        </svg>
                    </button>
                </div>
            </div>

            {dropdownState && (
                <div className="nav-dropdown">
                    <Link to="/">Home</Link>
                    <Link to="topic">Topics</Link>
                    <Link to="stats">Statistics</Link>
                    <Link to="blog">Blog</Link>
                </div>
            )}
        </>
    );
};

export default HeaderNav;
