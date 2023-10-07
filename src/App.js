import "./App.css";
import "../src/components/Common/Button/button.css";
import "./components/Common/Search/search.css";
import SearchPage from "./components/Pages/SearchPage/SearchPage";
import RecipePage from "./components/Pages/RecipePage/RecipePage";
import AccountPage from "./components/Pages/AccountPage/AccountPage";
import Main from "./components/Pages/Main/ Main";
import NotFound from "./components/Pages/NotFound/NotFound";
import Spline from "@splinetool/react-spline";
import { Routes, Route } from "react-router-dom";
import React from "react";
import SignIn from "./components/Pages/Main/Hero/SignIn/SignIn";
import SignUp from "./components/Pages/Main/Hero/SignUp/SignUp";
import SignUpPage from "./components/Pages/Main/Hero/SignUp/SignUpPage";
import SigninPage from "./components/Pages/Main/Hero/SignIn/SigninPage";
import { useSelector } from "react-redux";

function App() {
  const { token } = useSelector((state) => state.auth);
  return (
    <div className="App" id="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />{" "}
          <Route path="/search/" element={<SearchPage />} />
          <Route path="/search/:searchText" element={<SearchPage />} />
          <Route path="/recipe/:uri" element={<RecipePage />} />
          {token && <Route path="/account" element={<AccountPage />} />}
          <Route path="*" element={<NotFound />} />
          <Route path="/signin/" element={<SigninPage />} />
          <Route path="/signup/" element={<SignUpPage />} />
        </Routes>
      </div>

      <div className="background_scene">
        <Spline scene="https://prod.spline.design/tdSZfLhWdh-3Jb0i/scene.splinecode" />
      </div>
    </div>
  );
}

export default App;
