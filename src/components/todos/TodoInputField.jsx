function TodoInputField({ title, name, inputChangeHandler, todoVal }) {
  return (
    <>
      <div className="todo__write__info">
        <span>{title}</span>
        <input
          value={name === "title" ? todoVal.title : todoVal.content}
          onChange={(e) => inputChangeHandler(e)}
          name={name}
          placeholder={`${title}을 입력해주세요.`}
          type="text"
        />
      </div>
    </>
  );
}

export default TodoInputField;
