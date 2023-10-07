import React from "react";
import { useSelector } from "react-redux";

export default function InfoPage() {
  const { email, displayName } = useSelector((state) => state.auth);
  return (
    <>
      <section className="description-text">
        <div className="big_text">Name</div>
        <h4>{displayName}</h4>
      </section>
      <section className="description-text">
        <section className="description-text">
          <div className="big_text">Email address</div>
          <h4>{email}</h4>
        </section>
      </section>
    </>
  );
}
