const TaskBoardView = ({ tasks = {} }) => {
  return (
    <div className="TasksBoardView">
      <div className="TasksBoardView__StatusSection">
        <p className="TasksBoardView__StatusTitle">To Do</p>
      </div>

      <div className="TasksBoardView__StatusSection">
        <p className="TasksBoardView__StatusTitle">In Progress</p>
      </div>

      <div className="TasksBoardView__StatusSection">
        <p className="TasksBoardView__StatusTitle">Done</p>
      </div>
    </div>
  );
};

export default TaskBoardView;
