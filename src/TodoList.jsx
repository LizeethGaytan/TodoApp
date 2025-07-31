import TodoListItem from './TodoListItem';
//Created a basic structure for the TodoList component(basically a function)
function TodoList() {
  //todo array with 3 objects
  const todos = [
    { id: 1, title: 'water plants' },
    { id: 2, title: 'exercise' },
    { id: 3, title: 'study' },
  ];
  return (
    <ul>
      {todos.map((todo) => (
        //<li key={todo.id}>{todo.title}</li>
        <TodoListItem key={todo.id} title={todo.title} />
      ))}
    </ul>
  );
}

export default TodoList;
