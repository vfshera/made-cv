import React, { FC, FormEvent, useState } from "react";
import * as DEMO from "../default";

import useEditStore from "../stores/editStore";
import useLinkStore from "../stores/linkStore";
import useSkillStore from "../stores/skillsStore";
import useStackStore from "../stores/stackStore";
import AddIcon from "./AddIcon";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";
import Modal from "./Modal";

const View: FC<{ editMode: boolean }> = ({ editMode = false }) => {
  const skillsStore = useSkillStore((state) => state);
  const stackStore = useStackStore((state) => state);
  const linksStore = useLinkStore((state) => state);

  const { categories, setCategory } = useEditStore((state) => state);
  const editTitle = () => console.log("edit");

  const [newSummary, setSummary] = useState<string>("");
  const [newName, setName] = useState<string>("");
  const [newSkill, setSkill] = useState<string>("");
  const [newStack, setStack] = useState<string>("");
  const [newLink, setLink] = useState<UserLinks>();
  const [newWork, setWork] = useState<Work>();

  const importantLinks =
    linksStore.links.length != 0 ? linksStore.links : DEMO.importantLinks;
  const skills =
    skillsStore.skills.length != 0 ? skillsStore.skills : DEMO.skills;
  const techStacks =
    stackStore.stacks.length != 0 ? stackStore.stacks : DEMO.techStacks;
  const workHistory = DEMO.workHistory;

  const closeModal = () => {
    setCategory(0);
  };
  const addLink = (e) => {
    e.preventDefault();
    // setCategory(0);

    console.log(e);
  };
  return (
    <main className="view">
      {/* HEADER */}
      <header>
        <h1 className="name flex  items-center gap-2">
          Your Name{" "}
          <EditIcon
            show={editMode}
            clickHandler={() => {
              setCategory(1);
            }}
          />
        </h1>
        <p className="summary ">
          Your summary starts here like <strong>adipisicing</strong> sit amet
          consectetur elit. Eum ab reiciendis itaque ullam, debitis obcaecati
          dolorem! Sint natus tempore iure deserunt error sunt assumenda labore
          saepe. <strong>Tempora aliquid dignissimos</strong> voluptatibus?{" "}
          <EditIcon
            show={editMode}
            clickHandler={() => {
              setCategory(2);
            }}
          />
        </p>
        <section className="important-links">
          <ul>
            {importantLinks.map((link, i) => (
              <li className="link-item" key={i}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}

            <AddIcon
              show={editMode}
              clickHandler={() => {
                setCategory(3);
              }}
            />
          </ul>
        </section>
      </header>

      {/* SKILLS & QUALIFICATIONS */}
      <section className="skills">
        <h2 className="lead-title">
          Skills & Qualifications{" "}
          <AddIcon
            show={editMode}
            clickHandler={() => {
              setCategory(4);
            }}
          />
        </h2>
        <ul>
          {skills.map((skill, i) => (
            <li className="skill-item" key={i}>
              <p className="skill">{skill}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* TECH STACK */}
      <section className="tech-stacks">
        <h2 className="lead-title">Tech Stacks</h2>

        <ul>
          {techStacks.map((stack, i) => (
            <li className="stack-item" key={i}>
              <p className="stack">{stack}</p>
            </li>
          ))}
          <AddIcon
            show={editMode}
            clickHandler={() => {
              setCategory(5);
            }}
          />
        </ul>
      </section>

      {/* WORK HISTORY */}

      <section className="work-history">
        <h2 className="lead-title">
          Work History{" "}
          <AddIcon
            show={editMode}
            clickHandler={() => {
              setCategory(6);
            }}
          />
        </h2>

        <ul className="history-list">
          {workHistory.map((work, i) => (
            <li className="history-list-item" key={i}>
              <article className="work">
                <h3>
                  {work.title}{" "}
                  <EditIcon show={editMode} clickHandler={editTitle} />{" "}
                  <DeleteIcon show={editMode} clickHandler={editTitle} />
                </h3>
                <p className="duration">
                  {work.duration.from} - {work.duration.to || "Present"}
                </p>
                <p className="summary">{work.summary}</p>
                <ul className="work-points">
                  {work.points.map((point, index) => (
                    <li key={index} className="point-item">
                      <p className="point">{point}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* PROJECT & ACCOMPLISHMENTS */}

      {/* MODALS SECTION */}

      {/* EDIT NAME */}
      <Modal isOpen={categories.current === 1} setIsOpen={closeModal}>
        <section className="px-7 py-5 flex flex-col gap-5">
          <h1 className="font-semibold text-2xl">Your Name</h1>
          <input
            type="text"
            placeholder="enter your name ..."
            className="px-2 py-1 rounded border border-gray-300"
            value={newName}
          />
          <div className="form-btns flex gap-5">
            <button className="w-1/3 shadow py-2 text-white bg-green-800 rounded-md">
              Add
            </button>
            <button
              onClick={() => closeModal()}
              className="w-1/3 py-2 shadow text-white bg-red-800 rounded-md"
            >
              Close
            </button>
          </div>
        </section>
      </Modal>
      {/* EDIT SUMMARY */}
      <Modal isOpen={categories.current === 2} setIsOpen={closeModal}>
        <section className="px-7 py-5 flex flex-col gap-5">
          <h1 className="font-semibold text-2xl">Edit Summary</h1>
        </section>
      </Modal>
      {/* EDIT LINKS */}
      <Modal isOpen={categories.current === 3} setIsOpen={closeModal}>
        <form onSubmit={addLink} className="px-7 py-5 flex flex-col gap-5">
          <h1 className="font-semibold text-2xl">Add Link</h1>
          <input
            type="text"
            placeholder="enter link title..."
            className="px-2 py-1 rounded border border-gray-300"
            name="link-title"
          />
          <input
            type="text"
            placeholder="🔗 link url ..."
            className="px-2 py-1 rounded border border-gray-300"
            name="link-url"
          />
          <div className="form-btns flex gap-5">
            <button
              type="submit"
              className="w-1/3 shadow py-2 text-white bg-green-800 rounded-md"
            >
              Add
            </button>
            <button
              onClick={() => closeModal()}
              className="w-1/3 py-2 shadow text-white bg-red-800 rounded-md"
            >
              Close
            </button>
          </div>
        </form>
      </Modal>
      {/* EDIT SKILL */}
      <Modal isOpen={categories.current === 4} setIsOpen={closeModal}>
        <section className="px-7 py-5 flex flex-col gap-5">
          <h1 className="font-semibold text-2xl">Your Skill</h1>
        </section>
      </Modal>
      {/* EDIT STACK */}
      <Modal isOpen={categories.current === 5} setIsOpen={closeModal}>
        <section className="px-7 py-5 flex flex-col gap-5">
          <h1 className="font-semibold text-2xl">Edit Stack</h1>
        </section>
      </Modal>
      {/* EDIT WORK */}
      <Modal isOpen={categories.current === 6} setIsOpen={closeModal}>
        <section className="px-7 py-5 flex flex-col gap-5">
          <h1 className="font-semibold text-2xl">Add Work</h1>
        </section>
      </Modal>
    </main>
  );
};

export default View;
