import React, { useState } from "react";
import { Accordion } from "./components/Accordion";
import { Search } from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework"
  },
  {
    title: "What is c#",
    content: "C# is a object orientated programming language"
  },
  {
    title: "What is PHP?",
    content: "PHP is a server side scripting language"
  }
];

const options = [
  {
    label: "the color red",
    value: "red"
  },
  {
    label: "the color green",
    value: "green"
  },
  {
    label: "the color blue",
    value: "blue"
  }
];

// const showComponent = (route, component) => {
//   return window.location.pathname ===
//   route ? component : null
// }

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          label="select color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
