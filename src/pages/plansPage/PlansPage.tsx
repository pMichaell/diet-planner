import classes from "./PlansPage.module.css";
import { useContext, useEffect, useState } from "react";
import { deletePlan, fetchUserPlans } from "../../firebase/FirestoreFunctions";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../firebase/Firebase";
import AnimatedPage from "../../components/animatedPage/AnimatedPage";
import { motion } from "framer-motion";
import clsx from "clsx";
import { DietPlan } from "../../Models";
import LoadingSpinner from "../../components/loadingComponents/LoadingSpinner";
import PlanSummaryElement from "./planSummary/PlanSummaryElement";
import { useNavigate } from "react-router-dom";
import ModalContext from "../../contexts/modalContext/ModalContext";
import NotificationModal from "../../components/modal/modalVariants/notificationModal/NotificationModal";
import { collection, query, where, onSnapshot } from "firebase/firestore";

const plansSectionVariants = {
  initial: { x: "-1000px", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.5,
      delay: 0.3,
    },
  },
};

const PlansPage = () => {
  const [plans, setPlans] = useState<DietPlan[] | null>(null);
  const [user] = useAuthState(auth);
  const modalContext = useContext(ModalContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getPlans = async () => {
      if (user) {
        const fetchedPlans = await fetchUserPlans(user);
        console.log(fetchedPlans);
        setPlans(fetchedPlans);
      }
    };

    getPlans();
  }, [user]);

  const onViewClick = (dietPlan: DietPlan) => {
    localStorage.setItem("planID", JSON.stringify(dietPlan.planID));

    localStorage.setItem("mealsCount", JSON.stringify(dietPlan.mealsCount));

    localStorage.setItem("mealNames", JSON.stringify(dietPlan.mealNames));

    localStorage.setItem("planName", JSON.stringify(dietPlan.planName));

    localStorage.setItem("monday", JSON.stringify(dietPlan.monday));

    localStorage.setItem("tuesday", JSON.stringify(dietPlan.tuesday));

    localStorage.setItem("wednesday", JSON.stringify(dietPlan.wednesday));

    localStorage.setItem("thursday", JSON.stringify(dietPlan.thursday));

    localStorage.setItem("friday", JSON.stringify(dietPlan.friday));

    localStorage.setItem("saturday", JSON.stringify(dietPlan.saturday));

    localStorage.setItem("sunday", JSON.stringify(dietPlan.sunday));

    navigate("../planner");
  };

  const modalClickHandler = async (planID: string) => {
    await deletePlan(planID);
    if (user) {
      const fetchedPlans = await fetchUserPlans(user);
      setPlans(fetchedPlans);
    }
    modalContext.closeModal?.();
  };

  const onDeleteClick = async (planID: string) => {
    modalContext.setModalChildren?.(
      <NotificationModal
        notificationText={"Are you sure, that you want to delete this plan?"}
        buttonText={"Yes"}
        onClick={() => modalClickHandler(planID)}
      />
    );

    modalContext.openModal?.();
  };

  return (
    <AnimatedPage
      className={clsx(
        "fillParent",
        "pagePadding",
        "centerContents",
        "overflowHidden"
      )}
    >
      <div
        className={clsx(
          "centerContents",
          "fillParent",
          "curvedBorder",
          "overflowHidden",
          classes.container
        )}
      >
        <motion.section
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          className={clsx(
            "fillParent",
            "centerContents",
            classes.headingSection
          )}
        >
          <h2 className={clsx("fw600", "fs600", "clrGreen")}>Your plans</h2>
        </motion.section>
        <motion.section
          variants={plansSectionVariants}
          initial={"initial"}
          animate={"animate"}
          className={clsx("fillParent", "flow", classes.plansSection)}
        >
          {plans ? (
            plans.map((plan, index) => (
              <PlanSummaryElement
                key={plan.planID}
                index={index}
                summaryInfo={plan}
                onViewClick={() => onViewClick(plan)}
                onDeleteClick={() => onDeleteClick(plan.planID!)}
              />
            ))
          ) : (
            <LoadingSpinner weight={"bold"} />
          )}
        </motion.section>
      </div>
    </AnimatedPage>
  );
};

export default PlansPage;
