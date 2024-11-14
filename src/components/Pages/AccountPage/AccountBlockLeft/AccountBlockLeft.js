import React, { useContext } from 'react';
import { AuthUserContext } from '../../../../context/AuthContext';
import Button from '../../../Common/Button/Button';
import '../../../../App.css';
import { useNavigate } from 'react-router';

function AccountBlockLeft({ type, setPage }) {
  const { userData, resetUserData } = useContext(AuthUserContext);
  const { photoURL } = userData;
  const navigate = useNavigate();
  const handleLogOut = () => {
    resetUserData();
    navigate('/');
  };
  return (
    <section className="avatar-block">
      <img
        src={photoURL}
        style={{ width: 200, height: 200, objectFit: 'cover' }}
      />
      <Button
        buttonClass="button button-brown big-text"
        label={type === 'info-page' ? 'Edit page' : 'Cancel'}
        onClick={() =>
          setPage(type === 'info-page' ? 'edit-page' : 'info-page')
        }
      />
      <Button
        buttonClass="button button-brown big-text"
        label="Change Password"
        onClick={() => setPage('password-page')}
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
