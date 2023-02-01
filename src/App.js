import "./index.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import ListPreview from "./components/ListPreview.jsx";

function App() {
  const [list, setList] = useState([
    { id: 1, text: "Get petrol" },
    { id: 2, text: "Pick kids up" },
    { id: 3, text: "Make tea" },
  ]);

  return (
    <div className='App'>
      <Header></Header>
      <ListPreview list={list}></ListPreview>
    </div>
  );
}

export default App;
