const TaskBoardView = ({
  tasks: { toDo = [], inProgress = [], done = [] },
}) => {
  return (
    <div className="TasksBoardView">
      <div className="TasksBoardView__StatusSection">
        <p className="TasksBoardView__StatusTitle">To Do</p>

        <div className="TasksBoardView__Tasks">
          {toDo.map((task) => (
            <div key={task.id} className="TasksBoardView__Task">
              <p className="TasksBoardView__TaskTitle">{task.title}</p>
              <p className="TasksBoardView__TaskDescription">
                {task.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="TasksBoardView__StatusSection">
        <p className="TasksBoardView__StatusTitle">In Progress</p>

        <div className="TasksBoardView__Tasks">
          {inProgress.map((task) => (
            <div key={task.id} className="TasksBoardView__Task">
              <p className="TasksBoardView__TaskTitle">{task.title}</p>
              <p className="TasksBoardView__TaskDescription">
                {task.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="TasksBoardView__StatusSection">
        <p className="TasksBoardView__StatusTitle">Done</p>

        {done.map((task) => (
          <div key={task.id} className="TasksBoardView__Task">
            <p className="TasksBoardView__TaskTitle">{task.title}</p>
            <p className="TasksBoardView__TaskDescription">
              {task.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoardView;
