import TodoCard from "./TodoCard";

function TodoList({ todos, type, markAsDone, deleteTodo }) {
  return (
    <>
      <h1 className="list__title">
        {type === "working" ? "Working..." : "Doen..."}
      </h1>
      <div className="list__item__wrapper">
        {todos.map((todo, idx) => (
          <TodoCard
            todo={todo}
            key={idx}
            markAsDone={() => markAsDone(idx)}
            deleteTodo={() => deleteTodo(idx, "working")}
            isDone={type === "done"}
          />
        ))}
      </div>
    </>
  );
}

export default TodoList;
