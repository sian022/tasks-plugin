import TaskListIcon from "../assets/images/task-list-icon.svg";
import { SIDEBAR_ITEMS } from "../utils/constants";

const Sidebar = ({ navigate, activePath }) => {
  return (
    <div className="SidebarContainer">
      <div className="Sidebar">
        <div className="Sidebar__Header">
          <img src={TaskListIcon} alt="icon" width="32px" />
        </div>

        <div className="Sidebar__Content">
          {SIDEBAR_ITEMS.map((item) => (
            <div
              key={item.url}
              onClick={() => navigate(item.url)}
              className={
                "Sidebar__Item" +
                (activePath === item.url ? " Sidebar__Item--Active" : "")
              }
            >
              <img src={item.icon} alt="icon" width="28px" />

              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
