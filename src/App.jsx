import './App.css';

function App() {
  //todo array with 3 objects
  const todos = [
    { id: 1, title: 'water plants' },
    { id: 2, title: 'exercise' },
    { id: 3, title: 'study' },
  ];
  return (
    <div>
      <h1>TO-DOS</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
