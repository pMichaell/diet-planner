import React from "react";
import Layout from "./layout/layout/Layout";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import PlannerPage from "./pages/plannerPage/PlannerPage";
import AccountPage from "./pages/accountPage/AccountPage";
import LoginPage from "./pages/loginPage/LoginPage";
import { AnimatePresence } from "framer-motion";
import RequireAuth from "./components/RequireAuth";

function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path={"/"} element={<HomePage />} />
          <Route
            path={"/planner"}
            element={
              <RequireAuth>
                <PlannerPage />
              </RequireAuth>
            }
          />
          <Route
            path={"/account"}
            element={
              <RequireAuth>
                <AccountPage />
              </RequireAuth>
            }
          />
          <Route path={"/login"} element={<LoginPage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
