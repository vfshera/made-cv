import React, { FC, useState } from "react";
import Accordion from "../components/Accordion";
import View from "../components/View";
import useLinkStore from "../stores/linkStore";

import useSkillStore from "../stores/skillsStore";
import useStackStore from "../stores/stackStore";

const Playground = () => {
  const { skills, addSkills } = useSkillStore((state) => state);
  const { stacks, addStacks } = useStackStore((state) => state);
  const { links, addLink } = useLinkStore((state) => state);

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
      <View editMode />
      <aside className="sidebar rightside">
        <h3 className="font-semibold">Content</h3>

        <hr className="bg-gray-50 h-px my-2" />

        <section className="accordion-wrapper">
          <Accordion
            title="Header"
            open={1}
            current={open}
            handleClick={handleOpen}
            body={() => (
              <>
                <button className="bg-blue-500 p-2 shadow hover:bg-blue-600 rounded text-white hover:text-white/90">
                  Change Name
                </button>
                <button className="bg-blue-500 p-2 shadow hover:bg-blue-600 rounded text-white hover:text-white/90">
                  Change Summary
                </button>
                <button className="bg-teal-500 p-2 shadow hover:bg-teal-600 rounded text-white hover:text-white/90">
                  Add Links
                </button>
                {links.length != 0 && (
                  <section className="list-rack flex flex-col gap-2">
                    {links.map((item, index) => (
                      <p
                        date-url={item.url}
                        className=" cursor-pointer"
                        key={index}
                      >
                        🔗 {item.title}
                      </p>
                    ))}

                    <hr className="mt-3 bg-gray-200 " />
                  </section>
                )}
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
                <section className="list-rack flex flex-col gap-2">
                  <input
                    type="text"
                    className="px-2 py-1 rounded border border-gray-300"
                    placeholder="add new skill"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();

                        console.log(e);

                        addSkills(e.target.value);

                        e.target.value = "";
                      }
                    }}
                  />
                  {skills.map((item, index) => (
                    <p className=" cursor-pointer" key={index}>
                      🎓 {item}
                    </p>
                  ))}

                  {skills.length != 0 && <hr className="mt-3 bg-gray-200 " />}
                </section>
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
                <section className="list-rack flex flex-col gap-2">
                  <input
                    type="text"
                    className="px-2 py-1 rounded border border-gray-300"
                    placeholder="add new tech stack"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();

                        addStacks(e.target.value);

                        e.target.value = "";
                      }
                    }}
                  />
                  {stacks.map((item, index) => (
                    <p className=" cursor-pointer" key={index}>
                      🚀 {item}
                    </p>
                  ))}

                  {stacks.length != 0 && <hr className="mt-3 bg-gray-200 " />}
                </section>
              </>
            )}
          />
        </section>
      </aside>
    </div>
  );
};

export default Playground;
