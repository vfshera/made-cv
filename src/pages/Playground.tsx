import React from "react";
import View from "../components/View";

const Playground = () => {
  return (
    <div className="playground">
      <aside className="sidebar leftside">
        <h3>
          Theme <span className="text-purple-900 text-sm ">💅Default</span>
        </h3>
        <hr className="bg-gray-50 h-px my-2" />
        {/* THEME LIST */}
      </aside>
      <View />
      <aside className="sidebar rightside">RIGHT</aside>
    </div>
  );
};

export default Playground;
