import React, { useState, useEffect } from "react";
import Footer from "./Footer/Footer";
import HeaderBar from "./NavigationBar/HeaderBar";
import MainPage from "./Pages/MainPage";
 

const MainScreen = () => {
 

  return (
    <div className="main_screen">
      <HeaderBar />
      <MainPage />
      
    </div>
  );
};

export default MainScreen;