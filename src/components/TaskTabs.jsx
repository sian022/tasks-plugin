const TaskTabs = ({ currentTab, onTabsChange }) => {
  const handleTabsChange = (tab) => {
    onTabsChange(tab);
  };

  return (
    <div className="TaskTabs">
      <div
        className={`TaskTabs__Tab ${
          currentTab === "Board"
            ? "TaskTabs__Tab--Active"
            : "TaskTabs__Tab--Inactive"
        }`}
        onClick={() => handleTabsChange("Board")}
      >
        Board
      </div>
      <div
        className={`TaskTabs__Tab ${
          currentTab === "List"
            ? "TaskTabs__Tab--Active"
            : "TaskTabs__Tab--Inactive"
        }`}
        onClick={() => handleTabsChange("List")}
      >
        List
      </div>
    </div>
  );
};

export default TaskTabs;
