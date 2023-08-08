import React from "react";

function AccountBlockRight({ type, setPage }) {
  return (
    <section className="profile-description-group">
      {type === "info-page" && (
        <>
          <section className="description-text">
            <div className="big_text">Name</div>
            <h4>John Doe</h4>
          </section>
          <section className="description-text">
            <section className="description-text">
              <div className="big_text">Email address</div>
              <h4>johndoe@gmail.com</h4>
            </section>
          </section>
        </>
      )}

      {type === "edit-page" && (
        <>
          <form className="form">
            <label className="big_text">
              Name
              <input
                type="text"
                className="input-account-data"
                name="name"
                placeholder="John Doe"
              />
            </label>
            <label className="big_text">
              Email address
              <input
                type="text"
                className="input-account-data"
                name="email"
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label className="big_text">
              Password
              <input
                type="text"
                className="input-account-data"
                name="password"
                placeholder="******"
              />
            </label>
            <label className="custom-file-upload">
              Upload a picture
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
              ></input>
            </label>
          </form>
        </>
      )}
    </section>
  );
}

export default AccountBlockRight;
