import React from "react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
    Tooltip,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
} from "recharts";

const Statistics = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/quiz")
            .then((res) => res.json())
            .then((data) => setData(data.data))
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Container>
            <section
                className="stats"
                style={{
                    width: "100%",
                    height: 700,
                    paddingTop: 50,
                    marginBottom: 150,
                }}
            >
                <h1
                    className="stats-header"
                    style={{
                        color: "#405073",
                        marginBottom: 50,
                        textAlign: "center",
                        textDecoration: "underline",
                    }}
                >
                    Quiz Statistics
                </h1>

                <ResponsiveContainer>
                    <BarChart width="100%" height="100%" data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#405073" />
                    </BarChart>
                </ResponsiveContainer>
            </section>
        </Container>
    );
};

export default Statistics;
