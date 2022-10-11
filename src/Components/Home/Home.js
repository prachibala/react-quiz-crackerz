import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <>
            <div className="home-header overlay">
                <div className="text">
                    <h1 style={{ color: "#405073" }}>
                        Quiz &{" "}
                        <span style={{ color: "#FABE2C" }}>Learning</span>{" "}
                        Organization.
                    </h1>
                    <p style={{ color: "#2e3951" }}>
                        we proviet best education system for you. We are
                        committed to providing excellent learning service and an
                        overall good experience. Thank you for choosing us.
                    </p>
                </div>
            </div>

            <h2> Our Courses</h2>
            <p>There are various kinds of courses available</p>
        </>
    );
};

export default Home;
