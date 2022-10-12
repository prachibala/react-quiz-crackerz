import "./Footer.css";

import { Link } from "react-router-dom";
// import logo from "../../images/logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-links">
                <Link to={"/"}>Home</Link>

                <Link to={"/topic"}>Topics</Link>

                <Link to={"/stats"}>Statistics</Link>

                <Link to={"/blog"}>Blog</Link>
            </p>
            <p className="copyright">Quize Zone &copy; 2022</p>
        </footer>
    );
};

export default Footer;
