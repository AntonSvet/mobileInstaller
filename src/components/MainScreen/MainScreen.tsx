import { useState } from "react";
import Footer from "./Footer/Footer";
import HeaderBar from "./NavigationBar/HeaderBar";
import MainPage from "./Pages/MainPage";
import SettingRSCard from "./Pages/Monitoring/CardDevice/SettingCard/SettingRSCard";

const MainScreen = () => {
  const [selectedMenu, setSelectedMenu] = useState("Мониторинг");
  const handleMenu = (el: string) => setSelectedMenu(el);
  //return <SettingRSCard />;
  return (
    <div className="main_screen">
      <HeaderBar selectedMenu={selectedMenu} callback={handleMenu} />
      <MainPage selectedMenu={selectedMenu} callback={handleMenu} />
      <Footer />
    </div>
  );
};

export default MainScreen;
