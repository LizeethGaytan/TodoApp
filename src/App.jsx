import { useState } from 'react';
import './App.css';
// Imported components
import TodoList from './features/TodoList/TodoList';
import TodoForm from './features/TodoForm';

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
  function updateTodo(editedTodo) {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === editedTodo.id) {
        // this area might be wrong, still a bit confused with destructuring(not sure if it should be of concern given I'm 6 weeks into the course)
        // const { ...editedTodo } = updatedTodo;
        return { ...editedTodo };
      }
      return todo;
    });
    setTodoList(updatedTodos);
  }
  return (
    <div>
      <h1>TODOS</h1>
      {/*TodoForm instance with an onAddTodo prop that's passes a handler function, addTodo*/}
      <TodoForm onAddTodo={addTodo} />
      {/*TodoList instance with a todoList state value and completeTodo helper function passed in as props*/}
      <TodoList
        todoList={todoList}
        onCompleteTodo={completeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
