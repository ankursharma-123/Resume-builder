import React from "react";

function Project({ Project: { title, description } }) {
  return (
    <div className="project">
      <h3 style={{ color: "rgb(88, 134, 193)" }}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
export default Project;
