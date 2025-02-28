import "./headerBar.css";
import DrawerMenu from "./DrawerMenu";
import SettingsMenu from "./SettingsMenu";

const HeaderBar = ({ selectedMenu, callback }: { selectedMenu: string; callback: (el: string) => void }) => {
  return (
    <header className="header">
      <div className="logo">
        <DrawerMenu selectedMenu={selectedMenu} callback={callback} />
      </div>
      <div className="logo">
        <span style={{ fontSize: "clamp(25px, 4vw, 24px)", margin: "0px", color: "var(--header-text-color" }}>
          Юпитер-2084
        </span>
      </div>
      <SettingsMenu />
    </header>
  );
};

export default HeaderBar;
