import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import Button from '../../../../Common/Button/Button';
import { AuthUserContext } from '../../../../../context/AuthContext';

export default function EditPage() {
  const { userData, changeNameAndPhoto } = useContext(AuthUserContext);
  const { displayName, photoURL } = userData;
  const navigate = useNavigate();

  const [newDisplayName, setNewDisplayName] = useState(displayName || '');
  const [newphotoURL, setNewphotoURL] = useState(photoURL || '');
  const [errorMsg, setErrorMsg] = useState('');

  const changeProfileDataHandler = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (!newphotoURL || !newDisplayName) {
      return;
    }

    changeNameAndPhoto(newDisplayName, newphotoURL).catch((err) => {
      setErrorMsg(err.message);
      navigate('/signin');
    });
  };

  return (
    <form className="form">
      {errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>}
      <label className="big_text">
        Name
        <input
          type="text"
          className="input-account-data"
          name="name"
          placeholder="John Doe"
          value={newDisplayName}
          onChange={(e) => setNewDisplayName(e.target.value || '')}
        />
      </label>
      <label className="big_text">
        Account photo url
        <input
          id="avatar"
          name="avatar"
          className="input-account-data"
          placeholder="Paste url"
          value={newphotoURL}
          onChange={(e) => setNewphotoURL(e.target.value || '')}
        ></input>
      </label>
      <Button
        buttonClass={'button button-brown big-text'}
        label={'Save changes'}
        onClick={changeProfileDataHandler}
      />
    </form>
  );
}
