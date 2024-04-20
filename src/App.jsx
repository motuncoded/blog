
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home.jsx";
import Technology from "./routes/Technology.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Business from "./routes/Business.jsx";
import General from "./routes/General.jsx";
import Fashion from "./routes/Fashion.jsx"
import Education from "./routes/Education.jsx"


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/general",
      element: <General />,
    },
    {
      path: "/technology",
      element: <Technology />,
    },
    {
      path: "/business",
      element: <Business />,
    },
    {
      path: "/fashion",
      element: <Fashion />,
    },
     {
      path: "/education",
      element: <Education />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
