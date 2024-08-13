import TaskListIcon from "../assets/task-list-icon.svg";
import { SIDEBAR_ITEMS } from "../utils/constants";

const Sidebar = () => {
  return (
    <div className="SidebarContainer">
      <div className="Sidebar">
        <div className="Sidebar__Header">
          <img src={TaskListIcon} alt="icon" width="32px" />
        </div>

        <div className="Sidebar__Content">
          {SIDEBAR_ITEMS.map((item) => (
            <a key={item.url} href={item.url} className="Sidebar__Item">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
