import React, { useState } from "react";
import "./form.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import Button from "../Common/Button/Button";

function FormSignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const signup = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential.user) {
          const user = auth.currentUser;

          updateProfile(user, {
            displayName: displayName, // some displayName,
            photoURL: "", // some photo url
          });
        }
        const user = userCredential.user;
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
            displayName: displayName,
          })
        );
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
        What's your name?
        <input
          className="input-registration"
          type="text"
          name="name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value || "")}
          placeholder="Enter your name"
        />
      </label>
      <label>
        Email
        <input
          className="input-registration"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value || "")}
          placeholder="Enter your email"
        />
      </label>
      <label>
        Password
        <input
          className="input-registration"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value || "")}
          placeholder="Choose your password"
        />
      </label>
      <Button
        buttonClass={"button button-green"}
        label={"Sign up"}
        onClick={signup}
      />
    </form>
  );
}

export default FormSignUp;
