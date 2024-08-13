import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div className="MainLayout">
      <Sidebar />

      <div className="MainLayout__content">content</div>
    </div>
  );
};

export default MainLayout;
