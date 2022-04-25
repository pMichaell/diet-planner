import classes from "./HomePage.module.css";
import AnimatedPage from "../../components/animatedPage/AnimatedPage";
import HomePageSection from "./homePageSection/HomePageSection";

const HomePage = () => {
  return (
    <AnimatedPage className={"fillParent"}>
      <HomePageSection number={"01"} text={"LAALAL"} />
    </AnimatedPage>
  );
};

export default HomePage;
