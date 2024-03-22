import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./NewTodo.module.css";
import { faPlusSquare as faPlusSquare } from "@fortawesome/free-regular-svg-icons";

function NewTodo({
  onSubmit,
  todo,
  setTodo,
  todoDescription,
  settodoDescription,
}) {
  const [inputOnFocus, setInputOnFocus] = useState(false);
  const input = useRef();

  const submitHandler = (ev) => {
    setTodo("");
    settodoDescription("");
    setInputOnFocus(false);
    input.current.value = "";
    onSubmit(todo);
  };

  return (
    <>
      <input
        type="text"
        name="todo"
        className={`${classes.input} `}
        placeholder="Add a task"
        value={todo}
        onChange={(ev) => setTodo(ev.target.value)}
        onFocus={(ev) => setInputOnFocus(true)}
        autoComplete="off"
        ref={input}
        style={{
          border: "5px solid #8282de",
          padding: "0.5rem",
          marginTop: "2rem",
          borderRadius: "10px",
        }}
      />
      <div style={{ display: "flex" }}>
        <textarea
          type="text"
          name="todo"
          className={`${classes.input} `}
          placeholder="Description"
          value={todoDescription}
          onChange={(ev) => settodoDescription(ev.target.value)}
          onFocus={(ev) => setInputOnFocus(true)}
          autoComplete="off"
          ref={input}
          style={{
            border: "5px solid #8282de",
            padding: "0.5rem",
            marginTop: "0.5rem",
            borderRadius: "10px",
          }}
        ></textarea>

        <button
          style={{
            marginLeft: "1rem",
            background: "transparent",
            fontSize: "2rem",
            border: " 0rem",
          }}
          disabled={!todo.trim() || !todoDescription.trim()}
          className={classes.addBtn}
          onClick={submitHandler}
        >
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
      </div>
    </>
  );
}

export default NewTodo;
