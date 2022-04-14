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
    <Fragment>
      <motion.button
        className={classes.providerButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <GoogleLogo size={"2em"} />
        <h4>Sign in with Google</h4>
      </motion.button>
      <motion.button
        className={clsx(classes.providerButton, classes.gitHubButton)}
      >
        <GithubLogo size={"2em"} />
        <h4>Sign in with Github</h4>
      </motion.button>
      <motion.button className={classes.providerButton}>
        <FacebookLogo size={"2em"} />
        <h4>Sign in with Facebook</h4>
      </motion.button>
    </Fragment>
  );
};

export default ProvidersContainer;
