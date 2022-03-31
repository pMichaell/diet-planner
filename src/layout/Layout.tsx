import { ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import classes from "./Layout.module.css";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
