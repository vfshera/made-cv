import React, { FC } from "react";
import { importantLinks, skills, techStacks, workHistory } from "../default";
import AddIcon from "./AddIcon";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";

const View: FC<{ editMode: boolean }> = ({ editMode = false }) => {
  const editTitle = () => console.log("edit");

  return (
    <main className="view">
      {/* HEADER */}
      <header>
        <h1 className="name flex  items-center gap-2">
          Your Name <EditIcon show={editMode} clickHandler={editTitle} />
        </h1>
        <p className="summary ">
          Your summary starts here like <strong>adipisicing</strong> sit amet
          consectetur elit. Eum ab reiciendis itaque ullam, debitis obcaecati
          dolorem! Sint natus tempore iure deserunt error sunt assumenda labore
          saepe. <strong>Tempora aliquid dignissimos</strong> voluptatibus?{" "}
          <EditIcon show={editMode} clickHandler={editTitle} />
        </p>
        <section className="important-links">
          <ul>
            {importantLinks.map((link, i) => (
              <li className="link-item" key={i}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}

            <AddIcon show={editMode} clickHandler={editTitle} />
          </ul>
        </section>
      </header>

      {/* SKILLS & QUALIFICATIONS */}
      <section className="skills">
        <h2 className="lead-title">
          Skills & Qualifications{" "}
          <AddIcon show={editMode} clickHandler={editTitle} />
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
          <AddIcon show={editMode} clickHandler={editTitle} />
        </ul>
      </section>

      {/* WORK HISTORY */}

      <section className="work-history">
        <h2 className="lead-title">
          Work History <AddIcon show={editMode} clickHandler={editTitle} />
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
    </main>
  );
};

export default View;
