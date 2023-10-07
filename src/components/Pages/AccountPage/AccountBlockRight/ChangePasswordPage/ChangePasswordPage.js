import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAuth, updatePassword } from "firebase/auth";
import { removeUser, setUser } from "../../../../../store/slices/authSlice";
import Button from "../../../../Common/Button/Button";

export default function ChangePasswordPage({ setPage }) {
  const { email, displayName, photoURL } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newEmail, setNewEmail] = useState(email || "");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (newPassword !== newPasswordConfirm) {
      setErrorMsg("Paswords should match");
    }
  }, [newPassword, newPasswordConfirm]);

  const signup = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (
      !newPassword ||
      !newPasswordConfirm ||
      newPassword !== newPasswordConfirm
    ) {
      return;
    }

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      dispatch(removeUser());
      navigate("/signin");
      return;
    }

    updatePassword(user, newPassword)
      .then(() => {
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        setPage("info-page");
      })
      .catch((err) => {
        setErrorMsg(err.message);
        if (err.code === 400) {
          dispatch(removeUser());
          navigate("/signin");
        }
      });
  };

  return (
    <form className="form">
      {errorMsg && <div style={{ color: "red" }}>{errorMsg}</div>}
      <label className="big_text">
        Password
        <input
          type="password"
          className="input-account-data"
          name="password"
          placeholder="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value || "")}
        />
      </label>
      <label className="big_text">
        Password confirm
        <input
          type="password"
          className="input-account-data"
          name="password"
          placeholder="password confirm"
          value={newPasswordConfirm}
          onChange={(e) => setNewPasswordConfirm(e.target.value || "")}
        />
      </label>
      <Button
        buttonClass={"button button-brown big-text"}
        label={"Save changes"}
        onClick={signup}
      />
    </form>
  );
}
