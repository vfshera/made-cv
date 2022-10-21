import React from "react";

const Playground = () => {
  const importantLinks: UserLinks[] = [
    { title: "Link 1", url: "#" },
    { title: "Link 2", url: "#" },
    { title: "Link 3", url: "#" },
    { title: "Link 4", url: "#" },
  ];

  const skills: string[] = [
    "4years+ php dev",
    "3years+ Javascript",
    "2years+ vuejs and react",
  ];

  const techStacks: string[] = ["Php,Laravel", "React,Nextjs", "Vuejs"];

  const workHistory: Work[] = [
    {
      title: "SENIOR DEVELOPER | COMPANY A",
      duration: {
        from: "Oct 2018",
        to: "May 2020",
      },
      summary:
        "Quaerat non quasi eum sed, corporis consectetur veritatis minus nostrum commodi fuga voluptatum quisquam quo architecto est eveniet. nesciunt vero earum labore",
      points: [
        "Ex rerum quod iure dolor. Laborum soluta molestias inventore, iure nam temporibus ducimus earum distinctio",
        "Esse tempore nesciunt recusandae a voluptate nisi eum porro? Odit, fugit laudantium.",
        "Harum asperiores quidem suscipit aperiam cum voluptate fugiat, officia eveniet iste officiis animi commodi tempore quae saepe, numquam voluptatum",
      ],
    },
    {
      title: "HTML EMAIL DEVELOPER | COMPANY B",
      duration: {
        from: "Oct 2021",
        to: null,
      },
      summary:
        "Laudantium velit delectus eveniet voluptatibus accusantium aliquid aliquam iure ipsum, fugit iste doloribus quo accusamus libero, itaque tenetur quis ea. Minima accusamus impedit aliquid qui ut est, omnis ducimus excepturi at! Iste non porro molestiae cupiditate. ",
      points: [
        "Datus est maiores distinctio, repellat ab architecto quis? Tenetur doloremque ",
        "Minus officiis ratione odio delectus dolores, incidunt tempore ex, distinctio commodi quam rem omnis labore qui? Nam nostrum adipisci, iste",
        "Dolor sit amet, consectetur adipisicing elit. Ab possimus minus provident!",
      ],
    },
  ];

  return (
    <div className="playground">
      <aside className="sidebar ">LEFT</aside>
      <main className="view">
        {/* HEADER */}
        <header>
          <h1 className="name">Your Name</h1>
          <p className="summary">
            Your summary starts here like <strong>adipisicing</strong> sit amet
            consectetur elit. Eum ab reiciendis itaque ullam, debitis obcaecati
            dolorem! Sint natus tempore iure deserunt error sunt assumenda
            labore saepe. <strong>Tempora aliquid dignissimos</strong>{" "}
            voluptatibus?
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
      <aside className="sidebar">RIGHT</aside>
    </div>
  );
};

export default Playground;
