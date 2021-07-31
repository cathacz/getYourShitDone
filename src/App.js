// imports
import React, { useState } from "react";
import Header from "./components/Header.js";
import List from "./components/List.js";
import ToDo from "./components/ToDos.js";
import Footer from "./components/Footer.js";

function App() {
  const [list, setList] = useState([]);

  const remove = (itemRemove) => {
    const newArr = list.filter((item) => item.id !== itemRemove);
    setList(newArr);
  };

  // const check = (itemCheck) => {
  //   setList((prevState) => {
  //     return prevState.filter((item) => {
  //       if (item.id === itemCheck) item.done = !item.done;
  //       //makes it true
  //       return item;
  //     });
  //   });
  // };

  const done = (itemDone) => {
    setList((prevState) => {
      return prevState.filter((item) => {
        if (item.id === itemDone) item.done = !item.done;
        //makes it true
        return (document.querySelector(
          ".title[id='itemDone']"
        ).style.textDecoration = "line-through");
      });
    });
  };

  return (
    <React.Fragment>
      <Header />
      <div className="main">
        {" "}
        <List setList={setList} />
        <ToDo list={list} remove={remove} done={done} />
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default App;
