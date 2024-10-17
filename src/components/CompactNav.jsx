import React from "react";

const CompactNav = () => {
  return (
    <div class="nav__content">
      <div class="nav__left">
        <h3>Movies<span className="textcolor">Paradise</span></h3>
      </div>
      <div class="nav__right">
        <a href="#home" class="nav__link">
          Home
        </a>
        <a href="" class="nav__link">
          Contact
        </a>
      </div>
    </div>
  );
};

export default CompactNav;
