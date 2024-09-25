import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { useOnlineStatus } from "./utils/useOnlineStatus";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from "./components/Cart";
import { Provider, useSelector } from "react-redux";
import store from "./utils/store";

const AppLayout = () => {
  const isOnline = useOnlineStatus();

  return isOnline ? (
    <div className="appLayout">
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </div>
  ) : (
    <h1>Oops! Looks like you are offline. Please check your internet.</h1>
  );
};

const About = lazy(() => import("./components/About"));
const Menu = lazy(() => import("./components/Menu"));

const browserConfig = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={"Loading..."}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={"Loading..."}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={browserConfig} />);
