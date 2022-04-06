import classes from "../LoginPage.module.css";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { FacebookLogo, GithubLogo, GoogleLogo } from "phosphor-react";

type ProvidersProps = {
  className?: string;
};

const ProvidersContainer = ({ className }: ProvidersProps) => {
  return (
    <Fragment>
      <motion.button className={classes.providerButton}>
        <GoogleLogo size={"16px"} />
        <h4>Sign in with Google</h4>
      </motion.button>
      <motion.button className={classes.providerButton}>
        <GithubLogo size={"16px"} />
        <h4>Sign in with Github</h4>
      </motion.button>
      <motion.button className={classes.providerButton}>
        <FacebookLogo size={"16px"} />
        <h4>Sign in with Facebook</h4>
      </motion.button>
    </Fragment>
  );
};

export default ProvidersContainer;
