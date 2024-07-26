import { MdDeleteOutline } from "react-icons/md";

const Todo = ({ key, task, completed }) => {
  console.log(task);
  return (
    <li>
      <input type='checkbox' defaultChecked={completed} />
      <span>{task}</span>
      <span style={{ margin: "5px" }}>
        <MdDeleteOutline />
      </span>
    </li>
  );
};

export default Todo;
