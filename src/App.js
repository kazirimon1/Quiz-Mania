
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          index: true,
          element: <Home></Home>

        },

        {
          path: 'topics',
          element: <Topics></Topics>,
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
        },
        {
          path: 'quiz/:id',
          element: <Quiz></Quiz>,
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        }



      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>
        <Home></Home>
      </RouterProvider>
    </div>
  );
}

export default App;
