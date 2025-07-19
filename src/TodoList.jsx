{
  /*extract from TodoList.jsx*/
}
{
  /*created a basic structure for the TodoList component(basically a function) */
}
function TodoList() {
  {
    /*todo array with 3 objects*/
  }
  const todos = [
    { id: 1, title: 'water plants' },
    { id: 2, title: 'exercise' },
    { id: 3, title: 'study' },
  ];
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
