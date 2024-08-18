import Sidebar from "../components/Sidebar";
import Tasks from "../pages/Tasks";
import Account from "../pages/Account";
import { useState } from "preact/hooks";

const MainLayout = () => {
  const [currentPath, setCurrentPath] = useState("/tasks");

  const renderContent = () => {
    switch (currentPath) {
      case "/tasks":
        return <Tasks />;
      case "/account":
        return <Account />;
      default:
        return <Tasks />;
    }
  };

  const navigate = (path) => {
    setCurrentPath(path);
  };

  return (
    <div className="MainLayout">
      <Sidebar navigate={navigate} activePath={currentPath} />

      <div className="MainLayout__content">{renderContent()}</div>
    </div>
  );
};

export default MainLayout;
