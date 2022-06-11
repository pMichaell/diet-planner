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

const plansSectionVariants = {
  initial: { x: "100vw", opacity: 0 },
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

const mockData = new Array<{ planName: string }>(8).fill({
  planName: '"new plan"',
});

const PlansPage = () => {
  const [plans, setPlans] = useState<DietPlan[] | null>(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getPlans = async () => {
      if (user) {
        const fetchedPlans = await fetchUserPlans(user);
        setPlans(fetchedPlans);
      }
    };

    getPlans();
  }, [user]);

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
            mockData.map((plan, index) => (
              <PlanSummaryElement index={index} summaryInfo={plan} />
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
