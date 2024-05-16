import { useState } from "react";
import "./App.css";
import TodoForm from "./components/todos/TodoForm";
import TodoList from "./components/todos/TodoList";
import "./reset.css";

function App() {
  // working, done으로 구분.
  const [todos, setTodos] = useState({
    working: [],
    done: [],
  });

  // 제목과 내용 입력 상태관리.
  const [todoVal, setTodoVal] = useState({
    title: "",
    content: "",
  });

  /*
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    관리하기 편하게 객체로 리팩토링 하였습니다.
  */

  /*
    // 제목 입력값과 내용 입력값 변경하는 핸들러
    const inputTitleChangeHandler = ({ target }) => {
      setTitle(target.value);
    };

    const inputContentChangeHandler = ({ target }) => {
      setContent(target.value);
    };

    이 부분이 중복되고 있어서 확장성있게 리팩토링을 시도해봤습니다.
  */

  // 제목 입력값과 내용 입력값 변경하는 핸들러
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setTodoVal((prev) => ({
      ...prev,
      [name]: value,
      // 동적으로 속성을 처리하였습니다.
    }));
  };

  // 새로운 Todo을 추가하는 기능
  const addTodo = (newTodo) => {
    setTodos((prev) => ({
      ...prev,
      working: [...prev.working, newTodo],
    }));
  };

  // Todo 완료 상태로 변경하는 기능
  const markAsDone = (todoIndex) => {
    const updatedTodo = todos.working[todoIndex];
    setTodos((prev) => ({
      working: prev.working.filter((_, idx) => idx !== todoIndex),
      done: [...prev.done, updatedTodo],
    }));
  };

  // 완료된 Todo를 취소하는 기능
  const cancelMarkAsDone = (todoIndex) => {
    const updatedTodo = todos.done[todoIndex];
    // 완료된 Todo를 done 배열에서 필터링해서 제거하고 working배열에 추가함.
    setTodos((prev) => ({
      done: prev.done.filter((_, idx) => idx !== todoIndex),
      working: [...prev.working, updatedTodo],
    }));
  };

  // Todo를 삭제하는 기능
  const deleteTodo = (todoIndex, type) => {
    setTodos((prev) => ({
      ...prev,
      [type]: prev[type].filter((_, idx) => idx !== todoIndex),
      // type 속성은 동적으로 처리. working, done을 의미합니다.
    }));
  };

  // Todo 추가하는 폼을 submit하는 기능
  const todoFormSubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      title: todoVal.title,
      content: todoVal.content,
    };

    // 제목과 내용이 빈 값이 아닌 경우만 추가
    if (todoVal.title.trim().length > 0 && todoVal.content.trim().length > 0) {
      addTodo(newTodo);
      setTodoVal({ title: "", content: "" });
    } else {
      alert("빈 칸을 모두 입력해주세요.");
    }
  };

  return (
    <div className="todo__wrapper">
      <TodoForm
        todoFormSubmitHandler={todoFormSubmitHandler}
        inputChangeHandler={inputChangeHandler}
        todoVal={todoVal}
      />

      <div className="main">
        <div className="todo__list__wrapper">
          <div className="list__card__wrapper">
            <TodoList
              todos={todos.working}
              type="working"
              markAsDone={markAsDone}
              deleteTodo={deleteTodo}
            />
            <TodoList
              todos={todos.done}
              type="done"
              markAsDone={cancelMarkAsDone}
              deleteTodo={deleteTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
