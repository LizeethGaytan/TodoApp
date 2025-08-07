import { useRef } from 'react';

// TodoFrom component, returns a form
// Self Note: Invoking onAddTodo needs to be passed in as a prop could be done as (props) then called props.onAddTodo() or {onAddTodo} and called onAddTodo()?
function TodoForm({ onAddTodo }) {
  // useRef invoked with an empty string
  const todoTitleInput = useRef();
  // Function takes event object
  function handleAddTodo(event) {
    event.preventDefault();
    const title = event.target.title.value;
    onAddTodo(title);

    event.target.title.value = '';
    todoTitleInput.current.focus();
  }
  return (
    // Added onSubmit event handler and passed handleAddTodo function
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo:</label>
      <input id="todoTitle" name="title" ref={todoTitleInput}></input>
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
