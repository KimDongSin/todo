import TodoInputField from "./TodoInputField";

function TodoForm({ todoFormSubmitHandler, inputChangeHandler, todoVal }) {
  return (
    <form onSubmit={todoFormSubmitHandler} className="todo__top__wrapper">
      <div className="todo__write__wrapper">
        <TodoInputField
          title="제목"
          name="title"
          inputChangeHandler={inputChangeHandler}
          todoVal={todoVal}
        />

        <TodoInputField
          title="내용"
          name="content"
          inputChangeHandler={inputChangeHandler}
          todoVal={todoVal}
        />
      </div>

      <button className="write__btn--add" type="submit">
        추가하기
      </button>
    </form>
  );
}

export default TodoForm;
