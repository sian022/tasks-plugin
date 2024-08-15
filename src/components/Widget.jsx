import { useState } from "preact/hooks";
import TaskListIcon from "../assets/images/task-list-icon.svg";
import MainLayout from "../layout/MainLayout";

const Widget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="WidgetContainer">
      {!isOpen && (
        <div className="WidgetContainer__Bubble" onClick={handleToggle}>
          <img src={TaskListIcon} alt="icon" width="22px" />
        </div>
      )}

      {isOpen && (
        <div className="WidgetContainer__WidgetContent">
          <button
            className="WidgetContainer__MinimizeButton"
            onClick={handleToggle}
          >
            <div className="WidgetContainer__MinimizeLine"></div>
          </button>

          <MainLayout />
        </div>
      )}
    </div>
  );
};

export default Widget;
