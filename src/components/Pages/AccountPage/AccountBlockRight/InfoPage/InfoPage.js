import React, { useContext } from 'react';
import { AuthUserContext } from '../../../../../context/AuthContext';

export default function InfoPage() {
  const { userData } = useContext(AuthUserContext);
  const { email, displayName } = userData;
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
