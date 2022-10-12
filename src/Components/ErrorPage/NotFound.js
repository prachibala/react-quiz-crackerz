import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import HeaderNav from "../Header/HeaderNav";
import Footer from "../Footer/Footer";
import { Container } from "react-bootstrap";

const NotFound = () => {
    return (
        <>
            <HeaderNav />
            <Container
                style={{
                    height: "60vh",
                }}
            >
                <h1
                    style={{
                        color: "#dc3545",
                        textAlign: "center",
                        margin: "100px auto",
                    }}
                >
                    <FontAwesomeIcon
                        icon={faCircleExclamation}
                        style={{ color: "#dc3545" }}
                    />{" "}
                    OPPs! Page Not Found.
                </h1>
            </Container>
            <Footer />
        </>
    );
};

export default NotFound;
