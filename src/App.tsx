import React from "react";
import Layout from "./layout/layout/Layout";
import classes from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import PlannerPage from "./pages/plannerPage/PlannerPage";
import AccountPage from "./pages/accountPage/AccountPage";
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/planner"} element={<PlannerPage />} />
        <Route path={"/account"} element={<AccountPage />} />
        <Route path={"/login"} element={<LoginPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
