import React from "react";

function Form({ onAdd, onInfo, prevValue }) {
  function handleInfo(event) {
    const { name, value } = event.target;

    onInfo({
      ...prevValue,
      [name]: value,
    });
    // event.preventDefault();
  }
  function handleEducation(name, value, index) {
    const oldEducation = prevValue.educations;
    oldEducation[index][name] = value;

    onInfo({
      ...prevValue,
      educations: oldEducation,
    });
  }
  function addEducation(event) {
    event.preventDefault();
    onInfo({
      ...prevValue,
      educations: [
        ...prevValue.educations,
        { program: "", institution: "", percentage: "" },
      ],
    });
  }
  function handleSkill(name, value, index) {
    const oldSkill = prevValue.skills;
    oldSkill[index][name] = value;

    console.log(oldSkill);
    onInfo({
      ...prevValue,
      skills: oldSkill,
    });
  }
  function addSkill(event) {
    event.preventDefault();
    onInfo({
      ...prevValue,
      skills: [...prevValue.skills, { skill: "" }],
    });
  }
  function handleProject(name, value, index) {
    const oldProject = prevValue.projects;
    oldProject[index][name] = value;
    onInfo({
      ...prevValue,
      projects: oldProject,
    });
  }
  function addProject(event) {
    event.preventDefault();
    onInfo({
      ...prevValue,
      projects: [...prevValue.projects, { title: "", description: "" }],
    });
  }
  return (
    <div>
      <form className="info">
        <input
          type="text"
          placeholder="Name"
          onChange={handleInfo}
          name="name"
        />
        <input
          type="text"
          placeholder="Title"
          onChange={handleInfo}
          name="title"
        />
        <hr />
        <input
          type="email"
          placeholder="email"
          onChange={handleInfo}
          name="email"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          onChange={handleInfo}
          name="phone"
        />
        <input
          type="url"
          placeholder="Social"
          onChange={handleInfo}
          name="social"
        />
        <hr />
        <div className="education-input">
          <h3 style={{ display: "inline" }}>Education</h3>
          <button
            className="add-btn"
            disabled={prevValue.educations.some(
              (education) =>
                education.program === "" ||
                education.percentage === "" ||
                education.institution === ""
            )}
            onClick={addEducation}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
            </svg>
          </button>
        </div>

        {prevValue.educations.map((education, index) => {
          return (
            <>
              <input
                type="text"
                name="program"
                placeholder="Study-program"
                onChange={(event) =>
                  handleEducation(event.target.name, event.target.value, index) 
                }
                value={education.program}
              />
              <input
                type="text"
                name="institution"
                placeholder="Institution"
                onChange={(event) =>
                  handleEducation(event.target.name, event.target.value, index)
                }
                value={education.institution}
              />
              <input
                type="text"
                name="percentage"
                placeholder="percentage"
                onChange={(event) =>
                  handleEducation(event.target.name, event.target.value, index)
                }
                value={education.percentage}
              />
            </>
          );
        })}

        <hr />
        <div className="skill-input">
          {" "}
          <h3>Skill</h3>
          <button
            className="add-btn"
            disabled={prevValue.skills.some((skill) => skill.skill === "")}
            onClick={addSkill}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
            </svg>
          </button>
        </div>

        {prevValue.skills.map((skill, index) => (
          <>
            <input
              type="text"
              name="skill"
              placeholder="skill"
              onChange={(event) =>
                handleSkill(event.target.name, event.target.value, index)
              }
              value={skill.skill}
            />
          </>
        ))}

        <hr />
        <div className="project-input">
          <h3>Projects</h3>{" "}
          <button
            className="add-btn"
            disabled={prevValue.projects.some(
              (project) => project.title === "" || project.description === ""
            )}
            onClick={addProject}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
            </svg>
          </button>
        </div>

        {prevValue.projects.map((project, i) => (
          <>
            <input
              type="text"
              name="title"
              placeholder="Project Name"
              onChange={(event) =>
                handleProject(event.target.name, event.target.value, i)
              }
              value={project.title}
            />
            <input
              type="text"
              name="description"
              placeholder="Project Description"
              onChange={(event) =>
                handleProject(event.target.name, event.target.value, i)
              }
              value={project.description}
            />
          </>
        ))}

        <hr />
      </form>
    </div>
  );
}

export default Form;
