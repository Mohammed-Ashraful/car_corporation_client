import {
    createUserWithEmailAndPassword, getAuth, getIdToken, onAuthStateChanged,
    signInWithEmailAndPassword, signOut, updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  const auth = getAuth();

  //Register user
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");

        const user = userCredential?.user;
        const newUser = { ...user, displayName: name };
        setUser(newUser);
        saveUser(email, name);
        // Update user name Before creation

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => setToken(idToken));
      } else {
        setUser(user);
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  useEffect(() => {
    const uri = `https://pacific-shore-00017.herokuapp.com/users/${user?.email}`;
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, [user?.email]);

  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://pacific-shore-00017.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return {
    registerUser,
    logOut,
    loginUser,
    user,
    admin,
    isLoading,
    authError,
    token,
  };
};
export default useFirebase;
