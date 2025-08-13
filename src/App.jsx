import { useState } from 'react';
import './App.css';
// Imported components
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  // useState: state value/variable(todoList), an update function(setTodoList), and a hook initialized with an empty array
  const [todoList, setTodoList] = useState([]);
  // helper function for addTodo
  function completeTodo(id) {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: true };
      }
      return todo;
    });
    // updated todolist state with updatedTodos array
    setTodoList(updatedTodos);
  }

  // handler function
  function addTodo(title) {
    const newTodo = { id: Date.now(), title, isCompleted: false };
    setTodoList([...todoList, newTodo]);
  }
  return (
    <div>
      <h1>TODOS</h1>
      {/*TodoForm instance with an onAddTodo prop that's passes a handler function, addTodo*/}
      <TodoForm onAddTodo={addTodo} />
      {/*TodoList instance with a todoList state value and completeTodo helper function passed in as props*/}
      <TodoList todoList={todoList} onCompleteTodo={completeTodo} />
    </div>
  );
}

export default App;
