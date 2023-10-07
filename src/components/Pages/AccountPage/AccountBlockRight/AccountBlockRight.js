import React from "react";
import { useSelector } from "react-redux";
import InfoPage from "./InfoPage/InfoPage";
import EditPage from "./EditPage/EditPage";
import ChangePasswordPage from "./ChangePasswordPage/ChangePasswordPage";

function AccountBlockRight({ type, setPage }) {
  return (
    <section className="profile-description-group">
      {type === "info-page" && <InfoPage />}

      {type === "edit-page" && <EditPage setPage={setPage} />}

      {type === "password-page" && <ChangePasswordPage setPage={setPage} />}
    </section>
  );
}

export default AccountBlockRight;
