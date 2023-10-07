import React, { useState } from "react";
import "./form.css";
import ButtonRouterLink from "../Common/Button/ButtonRouterLink";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/authSlice";
import { useNavigate } from "react-router";
import Button from "../Common/Button/Button";

function FormSignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const signin = (e) => {
    e.preventDefault();
    console.log("signing up");
    if (!email || !password) {
      setErrorMsg("Fill in your e-mail and password");
      return;
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
        console.log(user);
        navigate("/account");
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  return (
    <form className="form">
      {errorMsg && <div style={{ color: "red" }}>{errorMsg}</div>}
      <label>
        Email
        <input
          className="input-registration"
          type="text"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          className="input-registration"
          type="password"
          name="email"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <Button
        buttonClass={"button button-green"}
        label={"Sign in"}
        onClick={signin}
      />
    </form>
  );
}

export default FormSignIn;
