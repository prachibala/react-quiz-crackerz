import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Blog from "./Components/Blog/Blog";
import Practices from "./Components/Course/Practice/Practices";
import NotFound from "./Components/ErrorPage/NotFound";

import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Statistics from "./Components/Statistics/Statistics";
import Topics from "./Components/Topic/Topics";
//
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>,
                },
                {
                    path: "quiz/:courseId",
                    loader: async ({ params }) => {
                        return fetch(
                            `https://openapi.programming-hero.com/api/quiz/${params.courseId}`
                        );
                    },
                    element: <Practices></Practices>,
                },
                {
                    path: "topic",
                    element: <Topics></Topics>,
                },
                {
                    path: "blog",
                    element: <Blog></Blog>,
                },
                {
                    path: "stats",
                    element: <Statistics></Statistics>,
                },
            ],
        },
        {
            path: "*",
            element: <NotFound></NotFound>,
        },
    ]);
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
