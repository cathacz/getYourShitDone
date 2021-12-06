// imports
import React, { useState } from "react";
import Header from "./components/Header.js";
import List from "./components/List.js";
import ToDo from "./components/ToDos.js";
import Footer from "./components/Footer.js";

function App() {
  const [list, setList] = useState([]);

  // Done Function
  const done = (itemDone) => {
    setList((prevState) => {
      return prevState.filter((item) => {
        // item.classList.add("strike-through");
        if (item.id === itemDone) item.done = !item.done;
        //makes it true
        // return;
        console.log(item.title);
        <p>good job{item.title}</p>;
        console.log("Penis");
        <li className="strike-through">{item}</li>;
      });
    });
  };
  // Skip Function
  const later = (itemSkip) => {
    setList((prevState) => {
      return prevState.filter((item) => {
        if (item.id === itemSkip)
          // item.id === !item.skip;
          return item.id + 1;
        console.log("Vagina");
      });
    });
  };
  const skip = (itemSkip) => {
    const newArr = list.filter((item) => item.id !== itemSkip);
    setList(newArr);
  };

  // Remove Function
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

  return (
    <React.Fragment>
      <Header />
      <div className="main">
        <List setList={setList} />
        <ToDo
          list={list}
          remove={remove}
          done={done}
          skip={skip}
          later={later}
        />
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default App;
