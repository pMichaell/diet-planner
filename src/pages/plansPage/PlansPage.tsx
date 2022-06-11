import classes from "./PlansPage.module.css";
import { useEffect, useState } from "react";
import { fetchUserPlans } from "../../firebase/FirestoreFunctions";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/Firebase";
import AnimatedPage from "../../components/animatedPage/AnimatedPage";
import { motion } from "framer-motion";
import clsx from "clsx";
import { DietPlan } from "../../Models";
import LoadingSpinner from "../../components/loadingComponents/LoadingSpinner";
import PlanSummaryElement from "./planSummary/PlanSummaryElement";
import { useNavigate } from "react-router-dom";

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

const mockData = new Array<{ planName: string }>(30).fill({
  planName: '"new plan"',
});

const PlansPage = () => {
  const [plans, setPlans] = useState<DietPlan[] | null>(null);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const getPlans = async () => {
      if (user) {
        const fetchedPlans = await fetchUserPlans(user);
        setPlans(fetchedPlans);
      }
    };

    getPlans();
  }, [user]);

  const onPlanClick = (dietPlan: DietPlan) => {
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
                onClick={() => onPlanClick(plan)}
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
