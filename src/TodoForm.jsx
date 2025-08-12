import { useRef } from 'react';
import { useState } from 'react';

// TodoFrom component, returns a form
// Self Note: Invoking onAddTodo needs to be passed in as a prop could be done as (props) then called props.onAddTodo() or {onAddTodo} and called onAddTodo()?
function TodoForm({ onAddTodo }) {
  // useRef invoked with an empty string
  const todoTitleInput = useRef();
  //use state
  const [workingTodoTitle, setWorkingTodoTitle] = useState('');
  // Function takes event object
  function handleAddTodo(event) {
    event.preventDefault();
    onAddTodo(workingTodoTitle);
    setWorkingTodoTitle('');
    todoTitleInput.current.focus();
  }
  return (
    // Added onSubmit event handler/listener and passed handleAddTodo function
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo:</label>
      <input
        id="todoTitle"
        name="title"
        value={workingTodoTitle}
        ref={todoTitleInput}
        onChange={(e) => setWorkingTodoTitle(e.target.value)}
      ></input>
      <button type="submit" disabled={workingTodoTitle === ''}>
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
