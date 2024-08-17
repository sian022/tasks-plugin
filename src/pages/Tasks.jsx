import { useState } from "preact/hooks";
import Divider from "../components/Divider";
import { DUMMY_TASKS } from "../utils/dummy";
import TaskBoardView from "../components/TaskBoardView";
import TaskListView from "../components/TaskListView";
import TaskTabs from "../components/TaskTabs";

const Tasks = () => {
  const [currentTab, setCurrentTab] = useState("Board");

  const handleTabsChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="TasksPage">
      <h1 className="PageTitle">Tasks</h1>

      <Divider />

      <TaskTabs onTabsChange={handleTabsChange} currentTab={currentTab} />

      {currentTab === "Board" ? (
        <TaskBoardView tasks={DUMMY_TASKS} />
      ) : (
        <TaskListView tasks={DUMMY_TASKS} />
      )}
    </div>
  );
};

export default Tasks;
