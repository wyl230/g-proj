import React from 'react';
import ReactDOM from 'react-dom';
import App from './views';
import './assets/styles';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './routes/root.jsx';
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import ModelTable  from './views/model_table';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
  {
    path: "models_table",
    element: <ModelTable />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

