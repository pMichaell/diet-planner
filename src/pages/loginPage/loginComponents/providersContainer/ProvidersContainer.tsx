import classes from "./ProvidersContainer.module.css";
import { motion } from "framer-motion";
import { FacebookLogo, GithubLogo, GoogleLogo } from "phosphor-react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase/Firebase";

const ProvidersContainer = () => {
  const [signInWithFacebook] = useSignInWithFacebook(auth);

  const [signInWithGithub] = useSignInWithGithub(auth);

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
    <div className={classes.providersContainer}>
      <motion.button
        className={classes.providerButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => signInWithGoogle()}
      >
        <GoogleLogo size={"2em"} />
        <h4>Sign in with Google</h4>
      </motion.button>
      <motion.button
        className={classes.providerButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => signInWithGithub()}
      >
        <GithubLogo size={"2em"} />
        <h4>Sign in with Github</h4>
      </motion.button>
      <motion.button
        className={classes.providerButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => signInWithFacebook()}
      >
        <FacebookLogo size={"2em"} />
        <h4>Sign in with Facebook</h4>
      </motion.button>
    </div>
  );
};

export default ProvidersContainer;
