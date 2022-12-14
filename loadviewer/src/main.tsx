import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, redirect } from "react-router-dom";
import './index.css'
import Root, { loader as rootLoader } from "./routes/root";
import ErrorPage from './error';
import Details, { loader as boardLoader, ErrorPage as BoardErrorPage } from './routes/board';
import Index, { ErrorPage as IndexErrorPage } from './routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    errorElement: <ErrorPage />,
    children: [
      { path: "/board", loader: async () => { return redirect("/") } },
      {
        path: "/board/:id",
        element: <Details />,
        loader: boardLoader,
        errorElement: <BoardErrorPage />,
      },
      { index: true, element: <Index />, errorElement: <IndexErrorPage /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
