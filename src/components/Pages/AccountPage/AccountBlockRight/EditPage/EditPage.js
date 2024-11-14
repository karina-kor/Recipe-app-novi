import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { getAuth, updateProfile, updateEmail } from 'firebase/auth';
import Button from '../../../../Common/Button/Button';
import { AuthUserContext } from '../../../../../context/AuthContext';

export default function EditPage() {
  const { userData, updateUserData, resetUserData } =
    useContext(AuthUserContext);
  const { email, displayName, photoURL } = userData;
  const navigate = useNavigate();

  const [newEmail, setNewEmail] = useState(email || '');
  const [newPassword, setNewPassword] = useState('');
  const [newDisplayName, setNewDisplayName] = useState(displayName || '');
  const [newphotoURL, setNewphotoURL] = useState(photoURL || '');
  const [errorMsg, setErrorMsg] = useState('');

  const signup = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (!newphotoURL || !newDisplayName) {
      return;
    }

    const auth = getAuth();

    console.log(newphotoURL, newDisplayName);
    const user = auth.currentUser;
    console.log('currentUser', user);

    if (!user) {
      resetUserData();
      navigate('/signin');
      return;
    }

    updateProfile(user, {
      displayName: newDisplayName, // some displayName,
      photoURL: newphotoURL, // some photo url
    })
      .then(() => {
        if (newEmail && newEmail !== email) {
          updateEmail(user, newEmail)
            .then(() => {
              updateUserData({ email: newEmail });
            })
            .catch((err) => setErrorMsg(err.message));
        }
        updateUserData({
          photoURL: newphotoURL,
          displayName: newDisplayName,
        });
      })
      .catch((err) => setErrorMsg(err.message));

    console.log(photoURL, displayName);
    console.log(user);
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
        Email address
        <input
          type="text"
          className="input-account-data"
          name="email"
          placeholder="johndoe@gmail.com"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value || '')}
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
        onClick={signup}
      />
    </form>
  );
}
