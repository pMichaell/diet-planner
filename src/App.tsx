import React, { Suspense, useContext } from "react";
import Layout from "./layout/layout/Layout";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ModalContext from "./contexts/modalContext/ModalContext";
import LoginPageContextProvider from "./contexts/loginPageContext/LoginPageContextProvider";
import LoadingSpinner from "./components/loadingComponents/LoadingSpinner";
import useMealDetails from "./hooks/fetchHooks/use-meal-details";

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
  const { modalOpen } = useContext(ModalContext);
  useMealDetails("52772");
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
              <Suspense
                fallback={
                  <LoadingSpinner size={"6em"} weight={"bold"} center />
                }
              >
                <RequireAuth>
                  <QuestionnaireChecker>
                    <PlannerPage />
                  </QuestionnaireChecker>
                </RequireAuth>
              </Suspense>
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
                fallback={
                  <LoadingSpinner size={"6em"} weight={"bold"} center />
                }
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
