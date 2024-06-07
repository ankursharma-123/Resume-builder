import React, { useState } from "react";
import Form from "./Form.js";
import Personal from "./Personal.js";
import { usePDF } from "react-to-pdf";
import Navbar from "./Navbar.js";
function App() {
  const [personalInfo, setperInfo] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    social: "",
    educations: [{ program: "", institution: "", percentage: "" }],
    skills: [{ skill: "" }],
    projects: [{ title: "", description: "" }],
  });

  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const [build, setBuild] = useState(false);

  function handleClick() {
    setBuild(true);
  }

  return (
    <>
      <Navbar onBuild={setBuild} prevValue={build} />
      {build && (
        <div className="container">
          <div className="input">
            <Form onInfo={setperInfo} prevValue={personalInfo} />
            <input
              type="submit"
              onClick={() => toPDF()}
              placeholder="Download"
            />
          </div>
          <div ref={targetRef}>
            {personalInfo.name !== "" && (
              <div className="info">
                <Personal info={personalInfo} />
              </div>
            )}
          </div>
        </div>
      )}
      {!build && (
        <div className="landing-page">
          <h1>Get your Dream Job With resume.co</h1>
          <button id="btn-resume" onClick={handleClick}>
            Build Your Resume
          </button>
        </div>
      )}
    </>
  );
}

export default App;
