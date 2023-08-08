import React from "react";
import { ReactComponent as ProfilePicture } from "../../../../assets/icons/profile-pic.svg";
import Button from "../../../Common/Button/Button";
import "../../../../App.css";

function AccountBlockLeft({ type, setPage }) {
  return (
    <section className="avatar-block">
      <ProfilePicture />
      <Button
        buttonClass="button button-brown big-text"
        label={type === "info-page" ? "Edit page" : "Save changes"}
        onClick={() =>
          setPage(type === "info-page" ? "edit-page" : "info-page")
        }
      />
    </section>
  );
}

export default AccountBlockLeft;
