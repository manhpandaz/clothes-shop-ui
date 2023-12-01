import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import Product from "./pages/product/Product";
import Home from "./pages/home/Home";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [],
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/login",
    Component: Login,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
