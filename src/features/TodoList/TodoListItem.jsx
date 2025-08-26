import { useState } from 'react';
import TextInputWithLabel from '../../shared/TextInputWithLabel';
function TodoListItem({ todo, onCompleteTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(todo.title);
  // Event helper function, there's a difference b/w an event helper and handler function though both handle user interactions
  function handleCancel() {
    setWorkingTitle(todo.title);
    setIsEditing(false);
  }
  function handleEdit(event) {
    setWorkingTitle(event.target.value);
  }
  function handleUpdate(event) {
    if (isEditing) {
      event.preventDefault();
      // the below destructuring kind of helped me have a better understanding of destructuring
      onUpdateTodo({ ...todo, title: workingTitle });
      setIsEditing(false);
    }
  }
  return (
    <li>
      <form onSubmit={handleUpdate}>
        {isEditing ? (
          <>
            <TextInputWithLabel value={workingTitle} onChange={handleEdit} />
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="button" onClick={handleUpdate}>
              Update
            </button>
          </>
        ) : (
          <>
            <label>
              {' '}
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => onCompleteTodo(todo.id)}
              />
            </label>
            <span onClick={() => setIsEditing(true)}>{todo.title}</span>
          </>
        )}
      </form>
    </li>
  );
}

export default TodoListItem;
