import "./App.css";
import "../src/components/Common/Button/button.css";
import "./components/Common/Search/search.css";
import Quiz from "./components/Pages/Main/Quiz/Quiz";
import Hero from "./components/Pages/Main/Hero/Hero";
import SearchPage from "./components/Pages/SearchPage/SearchPage";
import RecipePage from "./components/Pages/RecipePage/RecipePage";
import AccountPage from "./components/Pages/AccountPage/AccountPage";
import React from "react";
import Main from "./components/Pages/Main/ Main";
import Spline from "@splinetool/react-spline";

function App() {
  return (
    <div className="App" id="App">
      <div className="container">
        <Main />
        <SearchPage />
        <RecipePage />
        <AccountPage />
      </div>

      <div className="background_scene">
        <Spline scene="https://prod.spline.design/tdSZfLhWdh-3Jb0i/scene.splinecode" />
      </div>
    </div>
  );
}

export default App;
