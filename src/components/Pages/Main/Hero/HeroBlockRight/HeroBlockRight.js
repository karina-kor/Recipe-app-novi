import React, { useState, useContext } from 'react';
import Button from '../../../../Common/Button/Button';
import Search from '../../../../Common/Search/Search';
import { AuthUserContext } from '../../../../../context/AuthContext';
import { useNavigate } from 'react-router';

function HeroBlockRight({ pageName, pageChangingFunctionProp }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const { userData } = useContext(AuthUserContext);
  const isLoggedIn = Boolean(userData.id);

  const handleButtonClick = () => {
    navigate('/search/' + search);
  };

  return (
    <div className="main-right">
      <>
        <div className="nav">
          {isLoggedIn ? (
            <Button
              buttonClass="button button-orange"
              label={'Account'}
              onClick={() => {
                navigate('/account');
              }}
            />
          ) : (
            <Button
              buttonClass="button button-orange"
              label={pageName === 'signup' ? 'Log in' : 'Sign up'}
              onClick={() =>
                pageChangingFunctionProp(
                  pageName === 'signup' ? 'signin' : 'signup'
                )
              }
            />
          )}
        </div>
        <div className="search-field-area">
          <Search
            searchClass="search-field"
            inputClass="input-search"
            inputType="text"
            inputPlaceholder={'Search a recipe...'}
            handleButtonClick={handleButtonClick}
            search={search}
            setSearch={setSearch}
          />
        </div>
      </>
    </div>
  );
}

export default HeroBlockRight;
