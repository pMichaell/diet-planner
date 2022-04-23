import React, { useContext, useEffect } from "react";
import Layout from "./layout/layout/Layout";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import PlannerPage from "./pages/plannerPage/PlannerPage";
import AccountPage from "./pages/accountPage/AccountPage";
import LoginPage from "./pages/loginPage/LoginPage";
import { AnimatePresence } from "framer-motion";
import RequireAuth from "./components/requireAuth/RequireAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/Firebase";
import Modal from "./components/modal/Modal";
import ModalContext from "./contexts/modalContext/ModalContext";

function App() {
  const location = useLocation();
  const { modalOpen, openModal, setModalText } = useContext(ModalContext);

  console.log(process.env.REACT_APP_API_KEY);

  useEffect(() => {
    setModalText?.("Complete your registration by confirming email!");
    openModal?.();
  }, []);

  return (
    <Layout>
      <AnimatePresence initial={false}>
        {modalOpen && <Modal />}
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
