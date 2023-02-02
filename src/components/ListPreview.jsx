import { useState } from "react";

const ListPreview = ({ list, setList }) => {
  const [itemId, setItemId] = useState("");

  const newList = [...list];

  const handleDelete = (e) => {
    setItemId(e.target.value);
    let finalList = newList.filter((task) => {
      return task.id != itemId;
    });
    setList(finalList);
  };

  return (
    <section className='list-preview'>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            <h3>
              {todo.text}
              <button value={todo.id} onClick={handleDelete}>
                Done
              </button>
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ListPreview;
