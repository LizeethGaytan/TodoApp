import { useState } from 'react';
import './App.css';
// Imported components
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  // useState: state value(todoList), an update function(setTodoList), and a hook initialized with an empty array
  const [todoList, setTodoList] = useState([]);

  // handler function
  function addTodo(title) {
    const newTodo = { id: Date.now(), title };
    setTodoList([...todoList, newTodo]);
  }
  return (
    <div>
      <h1>TODOS</h1>
      {/*TodoForm instance with an onAddTodo prop that's passes a handler function, addTodo*/}
      <TodoForm onAddTodo={addTodo} />
      {/*TodoList instance with a todoList state value pased in as a prop*/}
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
