import TodoListItem from '../TodoListItem';
//Created a basic structure for the TodoList component(basically a function)
function TodoList({ todoList, onCompleteTodo }) {
  // below variable contains an array of todo items that have not been completed/checked off
  const filteredTodoList = todoList.filter((todo) => !todo.isCompleted);
  return filteredTodoList.length === 0 ? (
    <p>"Get started! Add a todo above"</p>
  ) : (
    <ul>
      {/* change todoList references with filteredTodoList */}
      {filteredTodoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          todoList={todoList}
          onCompleteTodo={onCompleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
