import React from "react";
import Education from "./Education.js";
import Skill from "./Skills.js";
import Project from "./Projects.js";

function Personal({
  info: { name, title, email, phone, social, educations, skills, projects },
}) {
  return (
    <div className="resume-content">
      <div className="heading">
        <div className="name">
          {name && <h2>{name}</h2>}
          {title && <h4>{title}</h4>}
        </div>
        <div className="contact">
          {email && <h4>{email}</h4>}
          {phone && <h4>{phone}</h4>}
          {social && <h4>{social}</h4>}
        </div>
      </div>
      <hr />
      <h2>Education</h2>
      {educations.map((education) => {
        return (
          <>
            {education.program !== "" &&
              education.percentage !== "" &&
              education.institution !== "" && (
                <Education Education={education} />
              )}
          </>
        );
      })}
      <h2>Skill</h2>
      {skills.map((skill) => {
        return <>{skill && <Skill Skill={skill} />}</>;
      })}
      <h2>Projects</h2>
      {projects.map((project) => {
        return (
          <>
            {project && (
              <>
                <Project Project={project} />
              </>
            )}
          </>
        );
      })}
      <hr />
    </div>
  );
}

export default Personal;
