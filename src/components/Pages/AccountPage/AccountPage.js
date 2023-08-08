import React, { useState } from "react";
import Card from "../../Common/Card/Card";
import { ReactComponent as ProfilePicture } from "../../../assets/icons/profile-pic.svg";
import Button from "../../Common/Button/Button";
import Header from "../../Header/Header";
import "../../../App.css";
import AccountBlockLeft from "./AccountBlockLeft/AccountBlockLeft";
import AccountBlockRight from "./AccountBlockRight/AccountBlockRight";

function AccountPage() {
  const [type, setPageType] = useState("info-page");

  return (
    <section className="shadow-card white_page">
      <Header headerClass="header" navClass="nav-right" />
      <section className="top-side-page">
        <h3>John Doe</h3>
        <section className="top-info-page">
          <section className="top-side-left">
            <AccountBlockLeft type={type} setPage={setPageType} />
            <AccountBlockRight type={type} setPage={setPageType} />

            <section className="profile-description-group"></section>
          </section>
        </section>
      </section>
      <section className="bottom-side-account">
        <section className="description-text">
          <h4>Favourite recipes</h4>
          <section className="account-card-wrapper">
            <Card hasButton />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </section>
        <section className="description-text">
          <h4>Recently viewed</h4>
          <section className="account-card-wrapper">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </section>
      </section>
    </section>
  );
}

export default AccountPage;
