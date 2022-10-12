import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Course from "../Course/Course";
import { Row } from "react-bootstrap";

const Topics = () => {
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
        <Container>
            <div className="m-5" style={{ color: "#405073" }}>
                <h2 className="text-center"> Our Courses</h2>
                <p className="text-center">
                    There are various kinds of courses available
                </p>
            </div>

            <Row>
                {courses.map((course) => (
                    <Course key={course.id} course={course}></Course>
                ))}
            </Row>
        </Container>
    );
};

export default Topics;
