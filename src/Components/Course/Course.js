import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Course.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
    return (
        <div className="singleCard mb-5">
            <Card style={{ width: "17rem" }}>
                <Card.Img variant="top" src={course.logo} />
                <Card.Body>
                    <Card.Title>{course.name}</Card.Title>

                    <Link to={`/${course.id}`}>
                        <Button className="button" size="sm">
                            Practice{" "}
                            <FontAwesomeIcon
                                icon={faArrowRight}
                            ></FontAwesomeIcon>
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;