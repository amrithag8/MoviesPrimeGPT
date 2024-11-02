

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Components/Header';
import BrowsePage from './Pages/BrowsePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';

function App() {
  const appRouter=createBrowserRouter([
    {
      path:"/browse",
      element:<BrowsePage/>
    },
    {
      path:"/login",
      element:<LoginPage/>
    },
    {
path:"/register",
element:<SignUpPage/>
    }
  ])
  return (
    <div className="App">
<RouterProvider router={appRouter}/>
     
     
    </div>
  );
}

export default App;
