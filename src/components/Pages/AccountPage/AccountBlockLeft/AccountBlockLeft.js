import React from "react";
import { ReactComponent as ProfilePicture } from "../../../../assets/icons/profile-pic.svg";
import Button from "../../../Common/Button/Button";
import "../../../../App.css";
import { removeUser } from "../../../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

function AccountBlockLeft({ type, setPage }) {
  const { email, photoURL } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(removeUser());
    navigate("/");
  };
  return (
    <section className="avatar-block">
      <img
        src={photoURL}
        style={{ width: 200, height: 200, objectFit: "cover" }}
      />
      {/* <ProfilePicture url={photoURL} /> */}
      <Button
        buttonClass="button button-brown big-text"
        label={type === "info-page" ? "Edit page" : "Cancel"}
        onClick={() =>
          setPage(type === "info-page" ? "edit-page" : "info-page")
        }
      />
      <Button
        buttonClass="button button-brown big-text"
        label="Change Password"
        onClick={() => setPage("password-page")}
      />
      <Button
        buttonClass="button button-brown big-text"
        label="Log out"
        onClick={handleLogOut}
      />
    </section>
  );
}

export default AccountBlockLeft;
