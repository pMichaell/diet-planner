import React, { useContext } from "react";
import Layout from "./layout/layout/Layout";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ModalContext from "./contexts/modalContext/ModalContext";

const Modal = React.lazy(() => import("./components/modal/Modal"));
const HomePage = React.lazy(() => import("./pages/homePage/HomePage"));
const PlannerPage = React.lazy(() => import("./pages/plannerPage/PlannerPage"));
const AccountPage = React.lazy(() => import("./pages/accountPage/AccountPage"));
const LoginPage = React.lazy(() => import("./pages/loginPage/LoginPage"));
const NotFoundPage = React.lazy(
  () => import("./pages/notFoundPage/NotFoundPage")
);
const RequireAuth = React.lazy(
  () => import("./components/requireAuth/RequireAuth")
);
const PlanChecker = React.lazy(
  () => import("./components/planChecker/PlanChecker")
);

function App() {
  const location = useLocation();
  const { modalOpen } = useContext(ModalContext);

  return (
    <Layout>
      <AnimatePresence>{modalOpen && <Modal />}</AnimatePresence>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path={"/"} element={<HomePage />} />
          <Route
            path={"/planner/*"}
            element={
              <RequireAuth>
                <PlanChecker>
                  <PlannerPage />
                </PlanChecker>
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
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
