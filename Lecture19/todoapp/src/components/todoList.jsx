import Todo from "./todo";

const TodoList = (props) => {
  const todolist = props.todos.map((todo) => {
    return (
      <Todo
        id={todo.id}
        key={todo.id}
        task={todo.task}
        completed={todo.completed}
      ></Todo>
    );
  });

  return <ul>{todolist}</ul>;
};

export default TodoList;
