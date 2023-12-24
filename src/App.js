import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import Topics from "./components/Topics/Topics";
import Quiz from "./components/Quiz/Quiz";
import Static from "./components/Static/Static";
import Blog from "./components/Blog/Blog";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          index: true,
          element: <Home></Home>,
        },

        {
          path: "topics",
          element: <Topics></Topics>,
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
        },
        {
          path: "quiz/:id",
          element: <Quiz></Quiz>,
          loader: ({ params }) =>
            fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        },
        {
          path: "statics",
          element: <Static></Static>,
        },
        {
          path: "blog",
          element: <Blog></Blog>,
        },
        {
          path: "*",
          element: (
            <div className="text-3xl text-blue-700 mt-4">
              Sorry not found please try another thing
            </div>
          ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}>
        <Home></Home>
      </RouterProvider>
    </div>
  );
}

export default App;
