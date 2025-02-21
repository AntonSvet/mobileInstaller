import React, { useState, useEffect } from "react";
 import "./mainPage.css"
import GprsPage from "./GPRS/GprsPage";
import PageRoute from "./PageRoute/PageRoute";

const MainPage = ({ selectedMenu }: { selectedMenu: string }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Определяем, мобильное ли устройство

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Обновляем состояние при изменении размера экрана
    };

    window.addEventListener("resize", handleResize); // Следим за изменением размера окна
    return () => window.removeEventListener("resize", handleResize); // Очистка
  }, []);

  return (
    <article className="main">
      <PageRoute route={selectedMenu} />
    </article>
  );
};

export default MainPage;
