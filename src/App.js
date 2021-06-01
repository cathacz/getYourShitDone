// imports
import React, { useState } from "react";
import Header from "./components/Header.js";
import List from "./components/List.js";
import ToDo from "./components/ToDos.js";
import Footer from "./components/Footer.js";

//
function App() {
  const [list, setList] = useState([]);

  const remove = (itemRemove) => {
    const newArr = list.filter((item) => item.id !== itemRemove);
    setList(newArr);
  };

  const check = (itemCheck) => {
    setList((prevState) => {
      return prevState.filter((item) => {
        if (item.id === itemCheck) item.done = !item.done;
        //makes it true
        return item;
      });
    });
  };

  return (
    <React.Fragment>
      <Header />
      <div className="main">
        {" "}
        <List setList={setList} />
        <ToDo list={list} remove={remove} check={check} />
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default App;
