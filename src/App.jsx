import './App.css';
{
  /*imported TodoList component*/
}
import './TodoList';
import TodoList from './TodoList';
{
  /*imported TodoForm component*/
}
import './TodoForm';
import TodoForm from './TodoForm';

function App() {
  return (
    <div>
      <h1>TO-DOS</h1>
      {/*Added an instance of TodoForm*/}
      <TodoForm />
      {/*Added an instance of the TodoList*/}
      <TodoList />
    </div>
  );
}

export default App;
