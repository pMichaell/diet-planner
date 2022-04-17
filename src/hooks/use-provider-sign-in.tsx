import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../firebase/Firebase";

const useProviderSignIn = (providerName: string) => {
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);

  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
};
