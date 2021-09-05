import React from "react";
import * as styles from "./resume.module.css";
import experiences from "../../constants/experiences.js";
import tools from "../../constants/tools.js";

const Resume = () => {
  return (
    <section className={styles.resume}>
      <div className={styles.container}>
        <div className={styles.label}>Education</div>
        <div className={styles.content}>
          <h3>Bachelor of Arts in Computer Science</h3>
          <span>Boston University, Boston, MA &#183; Aug. 2019 – May 2022</span>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <div className={styles.label}>Experiences</div>
        <div>
          {experiences.map((experience, index) => {
            return (
              <div className={styles.content} key={index}>
                <h3>{experience.title}</h3>
                <span>
                  {experience.workplace} &#183; {experience.timespan}
                </span>
                <ul>
                  {experience.description.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <div className={styles.label}>Tools</div>
        <div className={styles.tools}>
          {tools.map((tool, index) => (
            <div key={index}>
              {tool.icon} {tool.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
