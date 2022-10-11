import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
import "./Home.css";

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/quiz")
            .then((res) => res.json())
            .then((data) => setCourses(data.data))
            .catch((err) => {
                console.log(err);
            });
    }, []);
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

            <div className="m-5" style={{ color: "#405073" }}>
                <h2 className="text-center"> Our Courses</h2>
                <p className="text-center">
                    There are various kinds of courses available
                </p>
            </div>

            <div className="courseContainer container">
                {courses.map((course) => (
                    <Course key={course.id} course={course}></Course>
                ))}
            </div>
        </>
    );
};

export default Home;
