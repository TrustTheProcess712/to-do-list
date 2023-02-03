const ListPreview = ({ list, setList }) => {
  const newList = [...list];

  const handleDelete = (id) => {
    const finalList = newList.filter((todo) => todo.id !== id);
    setList(finalList);
  };
  console.log(list);

  return (
    <section className='list-preview'>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            <h3>
              {todo.text}
              <button onClick={() => handleDelete(todo.id)}>Done</button>
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ListPreview;
