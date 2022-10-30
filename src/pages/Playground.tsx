import React, { FC, useState } from "react";
import Accordion from "../components/Accordion";
import View from "../components/View";
import useIndexDB from "../hooks/useIndexDB";
import useEditStore from "../stores/editStore";
import useHeaderStore from "../stores/headerStore";
import useLinkStore from "../stores/linkStore";

import useSkillStore from "../stores/skillsStore";
import useStackStore from "../stores/stackStore";
import useWorkStore from "../stores/workStore";

const Playground = () => {
  const indexeDB = useIndexDB();

  const { skills, addSkills } = useSkillStore((state) => state);
  const { stacks, addStacks } = useStackStore((state) => state);
  const { links, addLink } = useLinkStore((state) => state);
  const { setCategory } = useEditStore((state) => state);
  const { header } = useHeaderStore((state) => state);
  const { work } = useWorkStore((state) => state);

  const [open, setOpen] = useState(1);
  const [editMode, setEditMode] = useState<boolean>(true);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  const persistToDB = async () => {
    const res = await indexeDB.addCv({
      holder: header.name,
      resume: { skills, links, stacks, header, work },
    });

    console.log(res);
  };
  return (
    <div className="playground">
      <aside className="sidebar leftside">
        <h3>
          Theme <span className="text-purple-900 text-sm ">💅Default</span>
        </h3>
        <hr className="bg-gray-50 h-px my-2" />
        {/* THEME LIST */}
        <section className="features">
          <p>Current : {header.name}</p>
          <div className="view-persist">
            <button className="view-btn" onClick={() => setEditMode(!editMode)}>
              View
            </button>
            <button className="persist-btn" onClick={() => persistToDB()}>
              Persist
            </button>
          </div>

          <div className="dbs flex flex-col ">
            <h3>Available :</h3>
            <hr className="bg-gray-50 h-px my-2" />

            <div className="db-list flex flex-col">
              {indexeDB.getDB()?.map((cv, i) => (
                <p
                  key={i}
                  onClick={() => indexeDB.removeCv(cv.id)}
                  className="text-gray-700 flex items-center justify-between  cursor-pointer hover:text-purple-900 p-1"
                >
                  {cv.holder}{" "}
                </p>
              ))}
            </div>
          </div>
        </section>
      </aside>
      <View editMode={editMode} />
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
                <button
                  onClick={() => setCategory(1)}
                  className="bg-blue-500 p-2 shadow hover:bg-blue-600 rounded text-white hover:text-white/90"
                >
                  Change Name
                </button>
                <button
                  onClick={() => setCategory(2)}
                  className="bg-blue-500 p-2 shadow hover:bg-blue-600 rounded text-white hover:text-white/90"
                >
                  Change Summary
                </button>
                <button
                  onClick={() => setCategory(3)}
                  className="bg-teal-500 p-2 shadow hover:bg-teal-600 rounded text-white hover:text-white/90"
                >
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
