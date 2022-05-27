import { Fragment, ReactNode } from "react";
import Header from "../header/Header/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Header />
      <Fragment>{children}</Fragment>
    </Fragment>
  );
};

export default Layout;
