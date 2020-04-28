import firebase from "../util/firebase";
import { useRouter } from "next/router";
import { useAuth } from "../util/auth.js";

const Signin = () => {
  // Access the auth from firebase directly
  // const auth = firebase.auth();
  // const authenticate = (provider) => {
  //   const authProvider = new firebase.auth[`${provider}AuthProvider`]();
  //   auth
  //     .signInWithPopup(authProvider)
  //     .then(() => router.push("/"))
  //     .catch((err) => console.log(err));
  // };
  const auth = useAuth();
  const router = useRouter();
  const login = async (provider) => {
    try {
      let signin = await auth.signinWithProvider(provider);
      if (signin) {
        router.push("/");
      } else {
        console.log("signin");
        console.log(signin);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return <button onClick={() => login("google")}>Sign in with Google</button>;
};

export default Signin;
