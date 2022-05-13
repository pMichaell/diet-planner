import { ReactNode } from "react";
import Header from "../header/Header/Header";
import classes from "./Layout.module.css";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
