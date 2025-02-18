import React, { useState, useEffect } from "react";
import Menu from "./NavigationBar";
import './NavigationBar.css'
import DrawerMenu from "./DrawerMenu";
import SelectedListMenu from "./SelectedListMenu";
import SettingsMenu from "./SettingsMenu";

const HeaderBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Определяем, мобильное ли устройство
  const [selectedMenu, setSelectedMenu] = useState("Мониторинг");
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Обновляем состояние при изменении размера экрана
    };

    window.addEventListener("resize", handleResize); // Следим за изменением размера окна
    return () => window.removeEventListener("resize", handleResize); // Очистка
  }, []);
  const handleMenu = (el: string) => setSelectedMenu(el);
  return (
    <header className="header">
      <div className="logo">
        <DrawerMenu selectedMenu={selectedMenu} callback={handleMenu} />
      </div>
      <div className="logo">
        <SelectedListMenu selectedMenu={selectedMenu} />
      </div>
      <SettingsMenu />
    </header>
  );
};

export default HeaderBar;
