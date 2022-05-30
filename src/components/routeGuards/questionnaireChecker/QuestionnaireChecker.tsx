import React, { Fragment, ReactNode, useContext, useEffect } from "react";
import ModalContext from "../../../contexts/modalContext/ModalContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/Firebase";
import BinaryModal from "../../modal/modalVariants/binaryModal/BinaryModal";

const QuestionnaireChecker = ({ children }: { children: ReactNode }) => {
  const { openModal, closeModal, setModalChildren } = useContext(ModalContext);
  const [user, _] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  // @ts-ignore
  const from = location.state?.from || "/";

  useEffect(() => {
    const yesHandler = function yesHandler() {
      navigate("/planner");
      closeModal?.();
    };

    const noHandler = function noHandler() {
      localStorage.clear();
      navigate("/planner/questionnaire");
      closeModal?.();
    };

    const regex = RegExp("/planner/?.*");

    if (
      user &&
      localStorage.getItem("planName") &&
      localStorage.getItem("mealNames") &&
      localStorage.getItem("mealsCount") &&
      regex.test(location.pathname) &&
      from.pathname
    ) {
      setModalChildren?.(
        <BinaryModal
          text={
            "Looks like you have an unfinished plan, would you like to finish it right now?"
          }
          leftOptionText={"no"}
          rightOptionText={"yes"}
          leftOptionHandler={noHandler}
          rightOptionHandler={yesHandler}
        />
      );
      openModal?.();

      return;
    }
  }, [
    user,
    navigate,
    openModal,
    closeModal,
    location.pathname,
    setModalChildren,
    from.pathname,
  ]);

  return <Fragment>{children}</Fragment>;
};

export default QuestionnaireChecker;
