// const strike = (document.querySelectorAll(".title").style.textDecoration =
//   "line-through");
const ToDos = (props) => {
  const userToDo = props.list.map((toDo, i) => (
    <li key={i}>
      {" "}
      {/* <input
        className="checkbox"
        type="checkbox"
        defaultChecked={toDo.done}
        onChange={() => props.check(toDo.id)}
      /> */}
      <div className="title"> {toDo.title}</div>
      <div className="buttons">
        {" "}
        <button
          onClick={() => {
            document.querySelector(".title").style.textDecoration =
              "line-through";
          }}
        >
          Done!
        </button>
        <button
          onClick={() => {
            props.remove(toDo.id);
          }}
        >
          Later...
        </button>
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
