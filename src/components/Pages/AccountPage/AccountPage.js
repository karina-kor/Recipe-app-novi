import React, { useEffect, useState, useContext } from 'react';
import Card from '../../Common/Card/Card';
import Header from '../../Header/Header';
import '../../../App.css';
import AccountBlockLeft from './AccountBlockLeft/AccountBlockLeft';
import AccountBlockRight from './AccountBlockRight/AccountBlockRight';
import { AuthUserContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function AccountPage() {
  const [type, setPageType] = useState('info-page');
  const [likedRecipes, setLikedRecipes] = useState([]);
  const [viewedRecipes, setViewedRecipes] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const { userData } = useContext(AuthUserContext);
  const { displayName } = userData;

  useEffect(() => {
    const localStorageLikedRecipes = JSON.parse(
      localStorage.getItem('likedRecipes')
    );
    setLikedRecipes(localStorageLikedRecipes);
  }, []);

  useEffect(() => {
    const localStorageViewedRecipes = JSON.parse(
      localStorage.getItem('viewedRecipes')
    );
    setViewedRecipes(localStorageViewedRecipes);
  }, []);

  const handleHoverButtonDeleteLiked = (recipe) => {
    const localStorageLikedRecipes = JSON.parse(
      localStorage.getItem('likedRecipes')
    );
    const recipesWithNoChosenRecipe = localStorageLikedRecipes.filter(
      (lslRecipe) => lslRecipe.uri !== recipe.uri
    );
    localStorage.setItem(
      'likedRecipes',
      JSON.stringify(recipesWithNoChosenRecipe)
    );
    window.location.reload();
  };

  const handleHoverButtonDeleteViewed = (recipe) => {
    const localStorageViewedRecipes = JSON.parse(
      localStorage.getItem('viewedRecipes')
    );
    const recipesWithNoChosenRecipe = localStorageViewedRecipes.filter(
      (lslRecipe) => lslRecipe.uri !== recipe.uri
    );
    localStorage.setItem(
      'viewedRecipes',
      JSON.stringify(recipesWithNoChosenRecipe)
    );
    window.location.reload();
  };

  const handleButtonClick = () => {
    navigate('/search/' + search);
  };

  return (
    <section className="shadow-card white_page">
      <Header
        headerClass="header"
        navClass="nav-right"
        handleButtonClick={handleButtonClick}
        search={search}
        setSearch={setSearch}
      />
      <section className="top-side-page">
        <h3>{displayName}</h3>
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
            {likedRecipes?.map((recipe) => (
              <Card
                hasButton
                recipe={recipe}
                key={recipe?.uri}
                onHoverButtonClick={handleHoverButtonDeleteLiked}
              />
            ))}
          </section>
        </section>
        <section className="description-text">
          <h4>Recently viewed</h4>
          <section className="account-card-wrapper">
            {viewedRecipes?.map((recipe) => (
              <Card
                hasButton
                recipe={recipe}
                key={recipe?.uri}
                onHoverButtonClick={handleHoverButtonDeleteViewed}
              />
            ))}
          </section>
        </section>
      </section>
    </section>
  );
}

export default AccountPage;
