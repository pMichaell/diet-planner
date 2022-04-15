import classes from "./ProvidersContainer.module.css";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { FacebookLogo, GithubLogo, GoogleLogo } from "phosphor-react";
import clsx from "clsx";

type ProvidersProps = {
  className?: string;
};

const ProvidersContainer = ({ className }: ProvidersProps) => {
  return (
    <div className={classes.providersContainer}>
      <motion.button
        className={classes.providerButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <GoogleLogo size={"2em"} />
        <h4>Sign in with Google</h4>
      </motion.button>
      <motion.button
        className={classes.providerButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <GithubLogo size={"2em"} />
        <h4>Sign in with Github</h4>
      </motion.button>
      <motion.button
        className={classes.providerButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FacebookLogo size={"2em"} />
        <h4>Sign in with Facebook</h4>
      </motion.button>
    </div>
  );
};

export default ProvidersContainer;
