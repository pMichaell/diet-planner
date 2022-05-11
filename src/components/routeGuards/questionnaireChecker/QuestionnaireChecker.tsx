import { Fragment, ReactNode, useContext, useEffect } from "react";
import ModalContext from "../../../contexts/modalContext/ModalContext";
import { useLocation, useNavigate } from "react-router-dom";

const QuestionnaireChecker = ({ children }: { children: ReactNode }) => {
  const { setModalText, openModal, setupOptionsModal, closeModal } =
    useContext(ModalContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // @ts-ignore
    const from = location.state?.from || "/";

    const yesHandler = function yesHandler() {
      navigate("/planner");
      closeModal?.();
      console.log("yes");
    };

    const noHandler = function noHandler() {
      localStorage.clear();
      navigate("/planner/questionnaire");
      closeModal?.();
      console.log("no");
    };

    const options: [string, string] = ["no", "yes"];

    const optionsHandlers = [noHandler, yesHandler];

    const regex = RegExp("/planner/?.*");

    if (
      localStorage.getItem("planName") &&
      localStorage.getItem("mealNames") &&
      localStorage.getItem("mealsCount") &&
      regex.test(location.pathname) &&
      from.pathname
    ) {
      setModalText?.(
        "Hey, looks like you have an unfinished plan available, would you like to finish it?"
      );

      setupOptionsModal?.(options, optionsHandlers);
      openModal?.();
      return;
    }
  }, [
    closeModal,
    location.pathname,
    navigate,
    openModal,
    setModalText,
    setupOptionsModal,
  ]);

  return <Fragment>{children}</Fragment>;
};

export default QuestionnaireChecker;
