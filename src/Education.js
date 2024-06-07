import React from "react";

function Education({ Education: { program, institution, percentage } }) {
  return (
    <div className="note">
      <h2 style={{ color: "rgb(88, 134, 193)" }}>{program}</h2>
      <p>{institution}</p>
      <p>{percentage}</p>
    </div>
  );
}

export default Education;
