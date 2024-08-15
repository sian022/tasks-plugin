import Divider from "../components/Divider";
import Tabs from "../components/Tabs";

const Tasks = () => {
  return (
    <div className="TasksPage">
      <h1 className="PageTitle">Tasks</h1>

      <Divider />

      <Tabs />

      <div>Task List</div>
    </div>
  );
};

export default Tasks;
