import { useState } from "react";

// controlled component (value is set with a prop: setList & changes to the value are handled by React)

const AddToDO = ({ setList }) => {
  const [newInput, setNewInput] = useState("");

  const handleSubmit = (e) => {
    // prevent the forms default behaviour(page refreshing on submit)
    e.preventDefault();
    // add the newItem to our list in App
    setList((currList) => {
      const newList = [...currList];
      newList.push({ id: currList.length + 1, text: newInput });
      return newList;
    });
    // reset the input to be empty
    setNewInput("");
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Next thing...'
        //  1. set the value of the input
        value={newInput}
        // 2. Update the state whenever a change is made to that value
        onChange={(e) => setNewInput(e.target.value)}
      />
      <button type='submit'>Add To Do</button>
    </form>
  );
};

export default AddToDO;
