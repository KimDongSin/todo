import "./App.css";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <h1>Redux TODO App</h1>
      <AddForm />
      <TodoList />
    </div>
  );
}

export default App;
