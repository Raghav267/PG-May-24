import { useState } from "react";

const Form = ({ addTodo }) => {
  const [taskeInp, setTaskINp] = useState("");

  // Handle Input todo
  const handleInput = (event) => {
    setTaskINp(event.target.value);
  };

  // form submittion controless
  const formSubmitHAndler = (event) => {
    event.preventDefault();
    // console.log(taskeInp);
    addTodo(taskeInp);
    setTaskINp();
  };

  return (
    <form onSubmit={formSubmitHAndler}>
      <input
        onChange={handleInput}
        type='text'
        placeholder='Add todo'
        // value={taskeInp}
      />
      <button>ADD</button>
    </form>
  );
};

export default Form;
