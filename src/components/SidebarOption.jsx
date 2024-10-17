import React from "react";

import "./SidebarOption.css";

const SidebarOption = ({ icon, text, active, nocursor }) => {
  return (
    <div
      className={`sidebar__option ${active && "sidebar__option--active"} ${
        nocursor && "no-cursor"
      }`}
    >
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default SidebarOption;
