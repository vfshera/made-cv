import React, { FC, FormEvent, useRef, useState } from "react";
import * as DEMO from "../default";

import useEditStore from "../stores/editStore";
import useHeaderStore from "../stores/headerStore";
import useLinkStore from "../stores/linkStore";
import useSkillStore from "../stores/skillsStore";
import useStackStore from "../stores/stackStore";
import useWorkStore from "../stores/workStore";
import AddIcon from "./AddIcon";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";
import Modal from "./Modal";

const View: FC<{ editMode: boolean }> = ({ editMode = false }) => {
  const workDescRef = useRef<any>();
  const workTitleRef = useRef<any>();
  const fromRef = useRef<any>();
  const toRef = useRef<any>();
  const skillRef = useRef<any>();
  const stackRef = useRef<any>();
  const nameRef = useRef<any>();
  const summaryRef = useRef<any>();
  const linkTitleRef = useRef<any>();
  const linkURLRef = useRef<any>();
  const skillsStore = useSkillStore((state) => state);
  const workStore = useWorkStore((state) => state);
  const stackStore = useStackStore((state) => state);
  const linksStore = useLinkStore((state) => state);
  const headerStore = useHeaderStore((state) => state);

  const { categories, setCategory } = useEditStore((state) => state);
  const editTitle = () => console.log("edit");

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
  const workHistory =
    workStore.work.length != 0 ? workStore.work : DEMO.workHistory;

  const closeModal = () => {
    setCategory(0);
  };

  // add work
  const addWork = (e) => {
    e.preventDefault();
    if (workDescRef.current.value === "") return;
    if (workTitleRef.current.value === "") return;
    if (fromRef.current.value === "") return;

    workStore.addWorks({
      title: workTitleRef.current.value,
      summary: workDescRef.current.value,
      duration: { from: fromRef.current.value, to: toRef.current.value },
      points: [],
    });

    closeModal();
  };
  // add link
  const addLink = (e) => {
    e.preventDefault();
    if (linkTitleRef.current.value !== "") {
      linksStore.addLink({
        title: linkTitleRef.current.value,
        url: linkURLRef.current.value,
      });
      closeModal();
    }
  };

  // add skill
  const addSkill = (e) => {
    e.preventDefault();
    if (skillRef.current.value !== "") {
      skillsStore.addSkills(skillRef.current.value);
      closeModal();
    }
  };

  // add name`
  const addName = (e) => {
    e.preventDefault();
    if (nameRef.current.value !== "") {
      headerStore.setName(nameRef.current.value);
      closeModal();
    }
  };
  // add stack
  const addStack = (e) => {
    e.preventDefault();
    if (stackRef.current.value !== "") {
      stackStore.addStacks(stackRef.current.value);
      closeModal();
    }
  };
  // add summary
  const addSummary = (e) => {
    e.preventDefault();
    if (summaryRef.current.value !== "") {
      headerStore.setSummary(summaryRef.current.value);
      closeModal();
    }
  };
  return (
    <main className="view">
      {/* HEADER */}
      <header>
        <h1 className="name flex  items-center gap-2">
          {headerStore.header.name === ""
            ? DEMO.header.name
            : headerStore.header.name}
          <EditIcon
            show={editMode}
            clickHandler={() => {
              setCategory(1);
            }}
          />
        </h1>
        <p className="summary ">
          {headerStore.header.summary === ""
            ? DEMO.header.summary
            : headerStore.header.summary}

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
                  {work.points?.map((point, index) => (
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
            ref={nameRef}
          />
          <div className="form-btns flex gap-5">
            <button
              onClick={addName}
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
        </section>
      </Modal>
      {/* EDIT SUMMARY */}
      <Modal isOpen={categories.current === 2} setIsOpen={closeModal}>
        <section className="px-7 py-5 flex flex-col gap-5">
          <h1 className="font-semibold text-2xl">Short Summary</h1>

          <textarea
            name=""
            className="px-2 py-1 rounded border border-gray-300"
            ref={summaryRef}
            id=""
            cols={50}
            rows={5}
          ></textarea>
          <div className="form-btns flex gap-5">
            <button
              onClick={addSummary}
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
        </section>
      </Modal>
      {/* EDIT LINKS */}
      <Modal isOpen={categories.current === 3} setIsOpen={closeModal}>
        <section className="px-7 py-5 flex flex-col gap-5">
          <h1 className="font-semibold text-2xl">Add Link</h1>
          <input
            ref={linkTitleRef}
            type="text"
            placeholder="enter link title..."
            className="px-2 py-1 rounded border border-gray-300"
            name="link-title"
          />
          <input
            ref={linkURLRef}
            type="text"
            placeholder="🔗 link url ..."
            className="px-2 py-1 rounded border border-gray-300"
            name="link-url"
          />
          <div className="form-btns flex gap-5">
            <button
              type="submit"
              onClick={addLink}
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
        </section>
      </Modal>
      {/* EDIT SKILL */}
      <Modal isOpen={categories.current === 4} setIsOpen={closeModal}>
        <section className="px-7 py-5 flex flex-col gap-5">
          <h1 className="font-semibold text-2xl">New Skill</h1>

          <textarea
            name=""
            className="px-2 py-1 rounded border border-gray-300"
            ref={skillRef}
            id=""
            cols={50}
            rows={5}
          ></textarea>
          <div className="form-btns flex gap-5">
            <button
              onClick={addSkill}
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
        </section>
      </Modal>
      {/* EDIT STACK */}
      <Modal isOpen={categories.current === 5} setIsOpen={closeModal}>
        <section className="px-7 py-5 flex flex-col gap-5">
          <h1 className="font-semibold text-2xl">Add Stack</h1>
          <input
            type="text"
            placeholder="enter new stack ..."
            className="px-2 py-1 rounded border border-gray-300"
            ref={stackRef}
          />
          <div className="form-btns flex gap-5">
            <button
              onClick={addStack}
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
        </section>
      </Modal>
      {/* EDIT WORK */}
      <Modal isOpen={categories.current === 6} setIsOpen={closeModal}>
        <section className="px-7 py-5 flex flex-col gap-5">
          <h1 className="font-semibold text-2xl">Add Work</h1>

          <input
            ref={workTitleRef}
            type="text"
            placeholder="Senior developer at Company X ..."
            className="px-2 py-1 rounded border border-gray-300"
            name="title"
          />
          <div className="datepicker flex justify-between items-center">
            <div className="input-group">
              <label className="text-gray-800">From : </label>
              <input
                type="date"
                name=""
                placeholder="From"
                id=""
                ref={fromRef}
                className="p-1 outline-none border border-gray-200 rounded relative"
              />
            </div>
            <div className="input-group">
              <label className="text-gray-800">To : </label>
              <input
                type="date"
                name=""
                placeholder="To"
                id=""
                ref={toRef}
                className="p-1 outline-none border border-gray-200 rounded relative"
              />
            </div>
          </div>
          <textarea
            name=""
            className="px-2 py-1 rounded border border-gray-300"
            ref={workDescRef}
            id=""
            cols={50}
            rows={5}
            placeholder="Worked on A ,B ,C ..."
          ></textarea>

          <div className="form-btns flex gap-5">
            <button
              onClick={addWork}
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
        </section>
      </Modal>
    </main>
  );
};

export default View;
