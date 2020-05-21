import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState, createContext, useContext } from "react";
import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();
export const AuthProvider = (props) => {
  const auth = Auth();
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const Auth = () => {
  const [user, setUser] = useState(null);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, email, photoURL } = user;
        const signedInUser = { name: displayName, email, photo: photoURL };
        setUser(signedInUser);
        return res.user;
      })
      .catch((err) => {
        return err.message;
      });
  };
  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then((res) => {
        setUser(null);
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const { displayName, email, photoURL } = user;
        const currentUser = { name: displayName, email, photo: photoURL };
        // console.log(currentUser);
        setUser(currentUser);
      } else {
        // No user is signed in.
      }
    });
  }, []);
  return {
    user, //returning the user state
    signInWithGoogle,
    signOut,
  };
};

export default Auth;
