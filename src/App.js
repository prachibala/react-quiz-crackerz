import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
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
                    path: "topic",
                    element: <Topics></Topics>,
                },
                {
                    path: "about",
                    element: <About></About>,
                },
                {
                    path: "blog",
                    element: <Blog></Blog>,
                },
            ],
        },
    ]);
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
