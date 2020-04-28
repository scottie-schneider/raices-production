import React, { useEffect } from "react";
import { useAuth } from "../util/auth.js";
import { useRouter } from "next/router";

const Profile = () => {
  const auth = useAuth();
  const router = useRouter();

  // Redirect to /signin
  // if not signed in.
  useEffect(() => {
    if (auth.user === false) {
      router.push("/signin");
    }
  }, [auth, router]);
  if (!auth.user) {
    return <div>Blank component</div>;
  }
  if (auth.user) {
    return <div>Profile Page</div>;
  }
};

export default Profile;
