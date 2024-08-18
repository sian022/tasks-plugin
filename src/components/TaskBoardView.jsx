import { Draggable, Droppable } from "react-beautiful-dnd";
import { convertCamelCaseToTitleCase } from "../utils/functions";

const TaskBoardView = ({ tasks }) => {
  const statuses = Object.entries(tasks).map(([status, tasks]) => ({
    title: convertCamelCaseToTitleCase(status),
    tasks,
    id: status,
  }));

  return (
    <div className="TasksBoardView">
      {statuses.map((status) => (
        <Droppable droppableId={status.id} key={status.id}>
          {(provided, snapshot) => (
            <div
              className="TasksBoardView__StatusSection"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <p className="TasksBoardView__StatusTitle">{status.title}</p>

              <div className="TasksBoardView__Tasks">
                {status.tasks.map((task, index) => (
                  <Draggable
                    key={task.id}
                    draggableId={task.id.toString()}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        key={task.id}
                        className="TasksBoardView__Task"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          ...provided.draggableProps.style,
                        }}
                      >
                        <p className="TasksBoardView__TaskTitle">
                          {task.title}
                        </p>
                        <p className="TasksBoardView__TaskDescription">
                          {task.description}
                        </p>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            </div>
          )}
        </Droppable>
      ))}
    </div>
  );
};

export default TaskBoardView;
