import { useState } from "preact/hooks";
import Divider from "../components/Divider";
import { DUMMY_TASKS } from "../utils/dummy";
import TaskBoardView from "../components/TaskBoardView";
import TaskListView from "../components/TaskListView";
import TaskTabs from "../components/TaskTabs";
import { DragDropContext } from "react-beautiful-dnd";

const Tasks = () => {
  const [currentTab, setCurrentTab] = useState("Board");
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  const handleTabsChange = (tab) => {
    setCurrentTab(tab);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // If there is no destination, return
    if (!destination) {
      return;
    }

    // If the destination and source are the same, return
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
  };

  return (
    <div className="TasksPage">
      <h1 className="PageTitle">Tasks</h1>

      <Divider />

      <TaskTabs onTabsChange={handleTabsChange} currentTab={currentTab} />

      <DragDropContext onDragEnd={onDragEnd}>
        {currentTab === "Board" ? (
          <TaskBoardView tasks={tasks} />
        ) : (
          <TaskListView tasks={tasks} />
        )}
      </DragDropContext>
    </div>
  );
};

export default Tasks;
