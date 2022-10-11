import React from "react";
import { useLoaderData } from "react-router-dom";

const Practices = () => {
    const course = useLoaderData();
    const { id } = course.data;
    return (
        <div>
            <h1>Practice= {id}</h1>
        </div>
    );
};

export default Practices;
