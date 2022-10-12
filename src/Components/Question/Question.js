import React, { useCallback, useState } from "react";

import "./Question.css";

const Question = ({ question }) => {
    const convertToPlain = useCallback((html) => {
        console.log("test");
        var tempDivElement = document.createElement("div");

        tempDivElement.innerHTML = html;

        return tempDivElement.textContent || tempDivElement.innerText || "";
    }, []);

    const [selectedOption, setSlectedOption] = useState(null);
    const [wrongAns, setWrongAns] = useState(false);
    const [correctAns, setCorrectAns] = useState(false);

    const handleChange = (e) => {
        setSlectedOption(e.target.value);
        if (e.target.value === question.correctAnswer) {
            setCorrectAns(true);
            setWrongAns(false);
        } else {
            setWrongAns(true);
            setCorrectAns(false);
        }
    };

    const handleAnsView = (e) => {
        setSlectedOption(question.correctAnswer);
        setWrongAns(false);
        console.log(e);
    };

    return (
        <div
            className={`q-container ${wrongAns && "q-container-wrong"} ${
                correctAns && "q-container-correct"
            }`}
        >
            <button className="q-icon" onClick={handleAnsView}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48px"
                    viewBox="0 0 24 24"
                    width="48px"
                    fill="#000000"
                >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
            </button>

            <h4
                className={`question ${wrongAns && "question-wrong"} ${
                    correctAns && "question-correct"
                }`}
            >
                {convertToPlain(question.question)}
            </h4>

            {question.options.map((o, i) => {
                return (
                    <div className="optionGroup" key={i}>
                        <input
                            type="radio"
                            value={o}
                            name={`${question.id}`}
                            id={`${question.id}-${i}`}
                            className="radio"
                            onChange={handleChange}
                            checked={selectedOption === o}
                        />

                        <label
                            htmlFor={`${question.id}-${i}`}
                            className={`option radioLable ${
                                wrongAns ? "wrong-bg" : "correct-bg"
                            }`}
                        >
                            <div
                                className={`dot  ${
                                    wrongAns ? "wrong-dot" : "correct-dot"
                                }`}
                            ></div>
                            <span className="option-text">{o}</span>
                        </label>
                    </div>
                );
            })}

            {wrongAns && <div className="wrongTxt">Wrong Answer</div>}
            {correctAns && <div className="correctTxt">Correct Answer</div>}
        </div>
    );
};

export default Question;
