import React from "react";

const Progressbar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="w-full h-full absolute bg-deep_purple_A200_1e rounded-[6px]"></div>
        <div
          className="h-full absolute bg-deep_purple_A200  rounded-[6px]"
          style={{ width: "40%" }}
        ></div>
      </div>
    </>
  );
};

Progressbar.defaultProps = {};

export default Progressbar;
