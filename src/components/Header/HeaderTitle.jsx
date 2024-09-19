import React from "react";

const HeaderTitle = ({ title, styles }) => {
  return (
    <div className="header-title">
      <span className="header-title-black">{title.part1}</span>
      <span className="header-title-green">{title.part2}</span>
    </div>
  );
};

export default HeaderTitle;
