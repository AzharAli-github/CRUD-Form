import { useState } from "react";
import "./index.css";
import { AiFillCheckCircle} from "react-icons/ai";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  // const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() !== "") {
      const myTodos = {
        text: todoText,
        done: false,
      };
      setTodos([...todos, myTodos]);
      setTodoText("");
    }
  };

  const handleCircleClick = (index) => {
    console.log("index", index);
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, done: !todo.done }; // Toggle the 'done' property
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div className="todo">
      <h1>Todo App</h1>
      <div className="inputSec">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter your todo"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          {/* {console.log("todoText", todoText)} */}
          {console.log("todos", todos)}

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="dispTodo">
        <div>
          <h1>Todo's</h1>

          {todos.map((todo, index) => {
  if (!todo.done) {
    return (
      <div key={index} className="todoAllOne">
        <input
          type="checkbox"
          className="checkbox"
          onChange={() => handleCircleClick(index)}
        />
        <span className="todoOne">{todo.text}</span>
      </div>
    );
  }
  return null; // Exclude the completed todos from rendering
})}
        </div>
        <div>
          <h1>Todo's Completed</h1>
          {todos
            .filter((todo) => todo.done)
            .map((todos, index) => (
              <div key={index} className="todoAllTwo">
                {console.log("todo.done", todos.done)}
        <AiFillCheckCircle/>
                <span className="todoOne">{todos.text}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
