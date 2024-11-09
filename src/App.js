

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BrowsePage from './Pages/BrowsePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import { Provider } from 'react-redux';
import AppStore from './Store/AppStore';
import SearchWithgpt from './Pages/searchWithgpt';
import { useState } from 'react';

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
    },
    {
      path:"/gpt-search",
      element:<SearchWithgpt/>
    }
  ])
  return (
    <Provider store={AppStore}>
    <div className="App">
<RouterProvider router={appRouter}/>
     
     
    </div>
    </Provider>
  );
}

export default App;
