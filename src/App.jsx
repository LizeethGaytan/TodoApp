import { useState } from 'react';
import './App.css';
// Imported components
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  // state value that holds a new todo
  const [newTodo, setNewTodo] = useState('Todo?');
  return (
    <div>
      <h1>TO-DOS</h1>
      {/*Added an instance of TodoForm*/}
      <TodoForm />
      <p>{newTodo}</p>
      {/*Added an instance of the TodoList*/}
      <TodoList />
    </div>
  );
}

export default App;
