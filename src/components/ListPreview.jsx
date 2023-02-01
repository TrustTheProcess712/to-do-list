const ListPreview = ({ list }) => {
  return (
    <section className='list-preview'>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.text}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ListPreview;
