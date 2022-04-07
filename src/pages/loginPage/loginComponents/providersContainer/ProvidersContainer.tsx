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
      <motion.button className={classes.providerButton}>
        <GoogleLogo size={"2em"} />
        <p>Sign in with Google</p>
      </motion.button>
      <motion.button
        className={clsx(classes.providerButton, classes.gitHubButton)}
      >
        <GithubLogo size={"2em"} />
        <p>Sign in with Github</p>
      </motion.button>
      <motion.button className={classes.providerButton}>
        <FacebookLogo size={"2em"} />
        <p>Sign in with Facebook</p>
      </motion.button>
    </Fragment>
  );
};

export default ProvidersContainer;
