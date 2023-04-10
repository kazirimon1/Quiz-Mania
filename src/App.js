
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,

        },
        {
          path: 'topics',
          element: <Topics></Topics>,
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
        }

      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
