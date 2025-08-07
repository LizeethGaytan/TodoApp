import TodoListItem from './TodoListItem';
//Created a basic structure for the TodoList component(basically a function)
function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
