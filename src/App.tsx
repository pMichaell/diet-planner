import React, { Suspense, useContext, useEffect } from "react";
import Layout from "./layout/layout/Layout";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ModalContext from "./contexts/modalContext/ModalContext";
import LoginPageContextProvider from "./contexts/loginPageContext/LoginPageContextProvider";
import useFetchMeal from "./hooks/fetchHooks/use-fetch-meal";
import NotificationModal from "./components/modal/modalVariants/notificationModal/NotificationModal";
import LoadingSpinner from "./components/loadingComponents/LoadingSpinner";
import BinaryModal from "./components/modal/modalVariants/binaryModal/BinaryModal";

const Modal = React.lazy(() => import("./components/modal/Modal"));
const HomePage = React.lazy(() => import("./pages/homePage/HomePage"));
const PlannerPage = React.lazy(() => import("./pages/plannerPage/PlannerPage"));
const AccountPage = React.lazy(() => import("./pages/accountPage/AccountPage"));
const LoginPage = React.lazy(() => import("./pages/loginPage/LoginPage"));
const NotFoundPage = React.lazy(
  () => import("./pages/notFoundPage/NotFoundPage")
);
const RequireAuth = React.lazy(
  () => import("./components/routeGuards/requireAuth/RequireAuth")
);
const QuestionnaireChecker = React.lazy(
  () =>
    import("./components/routeGuards/questionnaireChecker/QuestionnaireChecker")
);

function App() {
  const location = useLocation();
  const { modalOpen, openModal, setModalChildren, closeModal } =
    useContext(ModalContext);

  //TODO keep render functions pure
  //TODO Cleanup useEffects

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
                <QuestionnaireChecker>
                  <PlannerPage />
                </QuestionnaireChecker>
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
          <Route
            path={"/login"}
            element={
              <Suspense
                fallback={<LoadingSpinner size={"6em"} weight={"bold"} />}
              >
                <LoginPageContextProvider>
                  <LoginPage />
                </LoginPageContextProvider>
              </Suspense>
            }
          />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
