import React from "react";
import { importantLinks, skills, techStacks, workHistory } from "../default";

const View = () => {
  return (
    <main className="view">
      {/* HEADER */}
      <header>
        <h1 className="name">Your Name</h1>
        <p className="summary">
          Your summary starts here like <strong>adipisicing</strong> sit amet
          consectetur elit. Eum ab reiciendis itaque ullam, debitis obcaecati
          dolorem! Sint natus tempore iure deserunt error sunt assumenda labore
          saepe. <strong>Tempora aliquid dignissimos</strong> voluptatibus?
        </p>
        <section className="important-links">
          <ul>
            {importantLinks.map((link, i) => (
              <li className="link-item" key={i}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </section>
      </header>

      {/* SKILLS & QUALIFICATIONS */}
      <section className="skills">
        <h2 className="lead-title">Skills & Qualifications</h2>
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
        </ul>
      </section>

      {/* WORK HISTORY */}

      <section className="work-history">
        <h2 className="lead-title">Work History</h2>

        <ul className="history-list">
          {workHistory.map((work, i) => (
            <li className="history-list-item" key={i}>
              <article className="work">
                <h3>{work.title}</h3>
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
