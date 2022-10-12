import React from "react";
import { useLoaderData } from "react-router-dom";
import { Container } from "react-bootstrap";
import Question from "../../Question/Question";
import "./Practice.css";

const Practices = () => {
    const questions = useLoaderData();
    const questionsData = questions.data.questions;

    return (
        <div>
            <Container>
                <h2 className="practice-header">
                    Test your <span>{questions.data.name}</span> skill
                </h2>
                {questionsData &&
                    questionsData.map((question) => (
                        <Question
                            key={question.id}
                            question={question}
                        ></Question>
                    ))}
            </Container>
        </div>
    );
};

export default Practices;
