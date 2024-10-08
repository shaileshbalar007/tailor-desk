import React, { lazy, Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/Layout/spinner";
import { ToastContainer } from "react-toastify";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PrivateRoute from "./utils/PrivateRoute";
import { Routing } from "./components/shared/routing";
import MainLayout from "./components/Layout/MainLayout";

const Login = lazy(() => import("./components/pages/auth/Login/Login"));
const SignUp = lazy(() => import("./components/pages/auth/signUp/SignUp"));
const Account = lazy(() => import("./components/pages/Account/Account"));
const PatternMaster = lazy(() =>
  import("./components/pages/admin/PatternMaster/PatternMaster")
);
const ItemMaster = lazy(() =>
  import("./components/pages/admin/ItemMaster/Item_Mast")
);
const Forgot_Password = lazy(() =>
  import("./components/pages/auth/Forgot_Password/Forgot_Password")
);
const ConfirmPassword = lazy(() =>
  import("./components/pages/auth/Forgot_Password/ConfirmPassword")
);

const App = () => {
  const routes = [
    {
      path: Routing.Initial,
      component: Login,
      isPrivateRoute: false,
    },
    {
      path: Routing.Login,
      component: Login,
      isPrivateRoute: false,
    },
    {
      path: Routing.Signup,
      component: SignUp,
      isPrivateRoute: false,
    },
    {
      path: Routing.ConfirmPassword,
      component: ConfirmPassword,
      isPrivateRoute: false,
    },
    {
      path: Routing.Account,
      component: Account,
      isPrivateRoute: true,
    },
    {
      path: Routing.ItemMaster,
      component: ItemMaster,
      isPrivateRoute: true,
    },
    {
      path: Routing.PatternMaster,
      component: PatternMaster,
      isPrivateRoute: true,
    },
    {
      path: Routing.Forgot_Password,
      component: Forgot_Password,
      isPrivateRoute: false,
    },
  ];
  return (
    <>
      <ToastContainer position="top-right" />
      <ThemeProvider theme={THEME}>
        <Suspense fallback={<Spinner />}>
          <BrowserRouter>
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    route.isPrivateRoute ? (
                      // <PrivateRoute>
                      <MainLayout>
                        <route.component />
                      </MainLayout>
                    ) : (
                      // </PrivateRoute>
                      <route.component />
                    )
                  }
                />
              ))}
            </Routes>
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </>
  );
};
const THEME = createTheme({
  typography: {
    fontFamily: `'Verdana', sans- serif`,
  },
});

export default App;
