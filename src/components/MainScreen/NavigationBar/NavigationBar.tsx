import React, { useState } from "react";
import "./NavigationBar.css";
import SettingsMenu from "./SettingsMenu";
const NavigationBar = ({ isMobile }:any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для бургер-меню

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Переключаем состояние меню
  };
return <SettingsMenu />;
  return (
    <nav className={`menu ${isMobile ? "mobile" : "desktop"}`}>
      {isMobile ? (
        <>
          <button className="burger-button" onClick={toggleMenu}>
            &#e0141466; {/* Иконка бургер-меню */}
          </button>
          {isMenuOpen && <SettingsMenu />}
        </>
      ) : (
        <SettingsMenu />
      )}
    </nav>
  );
};

export default NavigationBar;
