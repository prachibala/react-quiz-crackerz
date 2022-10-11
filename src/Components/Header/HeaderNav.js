import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./HeaderNav.css";

const HeaderNav = () => {
    return (
        <div className="nav">
            <div className="container d-flex justify-content-between  align-items-center justify-content-center p-2">
                <div className="nav-left">
                    <img className="logo" src={logo} alt="" />
                    <div className="ps-2">
                        <h4 className="m-0" style={{ color: "#405073" }}>
                            Quize <span style={{ color: "#FABE2C" }}>Zone</span>
                        </h4>
                        <p className="m-0 ">
                            <small className="m-0" style={{ color: "#45567C" }}>
                                Happy Education
                            </small>
                        </p>
                    </div>
                </div>
                <div className="nav-right">
                    <Link to="home">Home</Link>
                    <Link to="topic">Topics</Link>
                    <Link to="about">About</Link>
                    <Link to="blog">Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderNav;
