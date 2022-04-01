import classes from "./Header.module.css";
import { ReactComponent as Checklist } from "../../assets/checklist-svgrepo-com.svg";
import { ReactComponent as HamburgerMenu } from "../../assets/hamburgerMenu.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <Checklist className={classes.checkList} />
      <h1>Diet Planner</h1>
      <HamburgerMenu className={classes.hamburgerMenu} />
    </header>
  );
};

export default Header;
