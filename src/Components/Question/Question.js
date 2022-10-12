import React from "react";

const Question = ({ question }) => {
    return (
        <div>
            <div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                        {question}
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                        Default checked radio
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                        Default checked radio
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                        Default checked radio
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Question;
