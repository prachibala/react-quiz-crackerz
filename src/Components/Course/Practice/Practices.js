import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../../Question/Question";

const Practices = () => {
    const questions = useLoaderData();
    console.log(questions.data.questions);
    const questionsData = questions.data.questions;
    return (
        <div>
            <h1>Practice=</h1>
            {questionsData.map((question) => (
                <Question key={question.id} question={question}></Question>
            ))}
        </div>
    );
};

export default Practices;
