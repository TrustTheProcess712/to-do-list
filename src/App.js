import "./index.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import ListPreview from "./components/ListPreview.jsx";
import AddToDo from "./components/AddToDo.jsx";

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      text: "Be Productive",
    },
  ]);

  return (
    <div className='App'>
      <Header></Header>
      <ListPreview list={list} setList={setList}></ListPreview>
      <AddToDo setList={setList}></AddToDo>
    </div>
  );
}

export default App;
