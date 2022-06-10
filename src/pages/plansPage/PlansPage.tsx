import { useEffect } from "react";
import { fetchUserPlans } from "../../firebase/FirestoreFunctions";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/Firebase";

const PlansPage = () => {
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetchUserPlans(user);
    }
  }, [user]);

  return <></>;
};

export default PlansPage;
