import { useState } from "react";

// controlled component (value is set with a prop: setList & changes to the value are handled by React)

const AddToDO = ({ setList }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e, newInput) => {
    e.preventDefault();
    // prevent the forms default behaviour(page refreshing on submit)
    // add the newItem to our list in App
    setList((currList) => {
      const newList = [...currList, { id: Math.random(), text: newInput }];
      return newList;
    });
    // reset the input to be empty
    setInput("");
  };

  return (
    <form className='form' onSubmit={(e) => handleSubmit(e, input)}>
      <input
        type='text'
        placeholder='Next thing...'
        //  1. set the value of the input
        value={input}
        // 2. Update the state whenever a change is made to that value
        onChange={(e) => setInput(e.target.value)}
      />
      <button type='submit'>Add To Do</button>
    </form>
  );
};

export default AddToDO;
