import TodoList from "./todoList";
import Form from "./form";
import { useState } from "react";

const TodoApp = () => {
  const toDummydos = [
    {
      id: 1,
      task: "Got to gym",
      completed: false,
    },
    {
      id: 2,
      task: "Got to College",
      completed: true,
    },
    {
      id: 3,
      task: "Learn Web",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(toDummydos);

  const addTodo = (task) => {
    return setTodos((prevState) => {
      return [
        ...prevState,
        { id: prevState.length, task: task, completed: false },
      ];
    });
  };

  return (
    <>
      <section>
        <Form addTodo={addTodo}></Form>
      </section>
      <section>
        <TodoList todos={todos}></TodoList>
      </section>
    </>
  );
};

export default TodoApp;
