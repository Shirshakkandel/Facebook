import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";

function Login() {
  const [{ }, dispatch] = useStateValue();
  const signIn = () => {
    //Sign in
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://th.bing.com/th/id/OIP.BFLPCKjhItVJNYMiqfKY5gAAAA?w=156&h=180&c=7&o=5&pid=1.7"
          alt=""
        />

        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="facebook"
        />

        <Button type="submit" onClick={signIn}>
          Sign in
        </Button>
      </div>
    </div>
  );
}

export default Login;
