import "./mainPage.css";
import PageRoute from "./PageRoute/PageRoute";

const MainPage = ({ selectedMenu, callback }: { selectedMenu: string; callback: (el: string) => void }) => {
  return (
    <main className="main">
      <PageRoute route={selectedMenu} callback={callback} />
    </main>
  );
};

export default MainPage;
