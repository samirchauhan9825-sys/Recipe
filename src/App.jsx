import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Contac from "./Pages/Contac";
import Recipe from "./Pages/Recipe";
import Search from "./Pages/Search";
// import RecipeByTag from "./RecipeByTag";
import SearchResult from "./Pages/SearchResult";

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/recipe/:tag" element={<Recipe/>} />
          {/* <Route path="/recipeByTag/:tag" element={<RecipeByTag />} /> */}
          <Route path="/search" element={<Search/> } /> 
          <Route path="/searchResult" element={<SearchResult/>} />
          <Route path="/contac" element={<Contac/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
