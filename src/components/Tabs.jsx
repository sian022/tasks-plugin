const Tabs = ({ currentTab, onTabsChange }) => {
  const handleTabsChange = (tab) => {
    onTabsChange(tab);
  };

  console.log(currentTab);

  return (
    <div className="TaskTabs">
      <div
        className={`TaskTabs__Tab ${
          currentTab === "Board" ? "TaskTabs__Tab--Active" : ""
        }`}
        onClick={() => handleTabsChange("Board")}
      >
        Board
      </div>
      <div
        className={`TaskTabs__Tab ${
          currentTab === "List" ? "TaskTabs__Tab--Active" : ""
        }`}
        onClick={() => handleTabsChange("List")}
      >
        List
      </div>
    </div>
  );
};

export default Tabs;
