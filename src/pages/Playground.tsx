import React, { FC, useState } from "react";
import Accordion from "../components/Accordion";
import Input from "../components/Input";
import ListRack from "../components/ListRack";
import Links from "../components/ListRack";
import View from "../components/View";

const Playground = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

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
      <aside className="sidebar rightside">
        <h3>Content</h3>

        <hr className="bg-gray-50 h-px my-2" />

        <section className="accordion-wrapper">
          <Accordion
            title="Header"
            open={1}
            current={open}
            handleClick={handleOpen}
            body={() => (
              <>
                <Input label="Your Name" placeholder="your name" />
                <button className="bg-blue-500 p-2 rounded text-white hover:text-white/90">
                  Change Summary
                </button>

                <ListRack icon="🔗" name="link" />
              </>
            )}
          />
          <Accordion
            title="Skills & Qualifications"
            open={2}
            current={open}
            handleClick={handleOpen}
            body={() => (
              <>
                <ListRack icon="🎓" name="qualifications" />
              </>
            )}
          />
          <Accordion
            title="Tech Stack"
            open={3}
            current={open}
            handleClick={handleOpen}
            body={() => (
              <>
                <ListRack icon="🚀" name="tech stack" />
              </>
            )}
          />
        </section>
      </aside>
    </div>
  );
};

export default Playground;
