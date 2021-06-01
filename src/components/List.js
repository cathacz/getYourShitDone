import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const List = (props) => {
  const [userInput, setUserInput] = useState("");

  function changeHandle(e) {
    setUserInput(e.target.value);
  }

  function submitHandle(e) {
    e.preventDefault();
    // console.log(uuidv4());
    if (userInput.length) {
      props.setList((prevState) => [
        ...prevState,
        { id: uuidv4(), title: userInput.trim(), done: false },
      ]);
      setUserInput("");
    }
  }
  return (
    <form onSubmit={submitHandle}>
      <input
        className="typeSomething"
        type="text"
        value={userInput}
        onChange={changeHandle}
        placeholder="What do you wanna do?"
      />
      <input className="addSomething" type="submit" value="Add" />
    </form>
  );
};

export default List;
