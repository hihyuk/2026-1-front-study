import React from "react";

function Album(props) {
  return (
    <div key={props.id}>
      <p>{props.title}</p>
    </div>
  );
}

export default Album;