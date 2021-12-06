import React from "react";
const ToDos = (props) => {
  // const strike = (document.querySelectorAll(".title").style.textDecoration =
  //   "line-through");
  const userToDo = props.list.map((toDo, i) => (
    <li key={i}>
      {/* <input
        className="checkbox"
        type="checkbox"
        defaultChecked={toDo.done}
        onChange={() => props.check(toDo.id)}
      /> */}
      <div className="title"> {toDo.title}</div>
      <div className="buttons">
        {/* Done Button */}
        <button
          onClick={() => {
            props.done(toDo.id);
          }}
        >
          Done!
        </button>

        {/* Later Button */}
        <button
          onClick={() => {
            props.later(toDo.id);
          }}
        >
          Later...
        </button>

        {/* Naaaah Button */}
        <button
          onClick={() => {
            props.remove(toDo.id);
          }}
        >
          Naaah
        </button>
      </div>
    </li>
  ));
  return <ul>{userToDo}</ul>;
};

export default ToDos;
