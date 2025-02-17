import React, { useState, useEffect } from "react";
import Menu from "./NavigationBar";
import './NavigationBar.css'
import DrawerMenu from "./DrawerMenu";
import SelectedListMenu from "./SelectedListMenu";

const HeaderBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Определяем, мобильное ли устройство

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Обновляем состояние при изменении размера экрана
    };

    window.addEventListener("resize", handleResize); // Следим за изменением размера окна
    return () => window.removeEventListener("resize", handleResize); // Очистка
  }, []);

  return (
    <header className="header">
      <div className="logo">
   
        <DrawerMenu />
      </div>
      <div className="logo">
        
        <SelectedListMenu />
      </div>
      <Menu isMobile={isMobile} />
    </header>
  );
};

export default HeaderBar;
