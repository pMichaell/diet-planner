import classes from "./ProvidersContainer.module.css";
import { motion } from "framer-motion";
import { FacebookLogo, GithubLogo, GoogleLogo } from "phosphor-react";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../../firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../../../firebase/FirestoreFunctions";

const ProvidersContainer = ({ className }: { className: string }) => {
  const navigate = useNavigate();

  const signInWithProvider = (providerName: string) => {
    const provider =
      providerName === "google"
        ? new GoogleAuthProvider()
        : providerName === "github"
        ? new GithubAuthProvider()
        : new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        navigate("/");
        await createUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={className}>
      <motion.button
        className={classes.providerButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => signInWithProvider("google")}
      >
        <GoogleLogo size={"2em"} />
        <h4>Sign in with Google</h4>
      </motion.button>
      <motion.button
        className={classes.providerButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => signInWithProvider("github")}
      >
        <GithubLogo size={"2em"} />
        <h4>Sign in with Github</h4>
      </motion.button>
      <motion.button
        className={classes.providerButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => signInWithProvider("facebook")}
      >
        <FacebookLogo size={"2em"} />
        <h4>Sign in with Facebook</h4>
      </motion.button>
    </div>
  );
};

export default ProvidersContainer;
