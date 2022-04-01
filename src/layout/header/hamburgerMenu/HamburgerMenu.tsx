import classes from "./HamburgerMenu.module.css";

type Props = {
  onClick: () => void;
  className?: string;
};

const HamburgerMenu = ({ className, onClick }: Props) => {
  return (
    <button onClick={onClick} className={classes.hamburgerMenu}>
      <div />
      <div />
      <div />
    </button>
  );
};

export default HamburgerMenu;
