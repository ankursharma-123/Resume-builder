import React from "react";

function Skill({ Skill: { skill } }) {
  return (
    <div className="skill">
      <h4>{skill}</h4>
    </div>
  );
}
export default Skill;
