import { useState } from "react";
import useToogle from "../hooks/useToggle";

function Card() {
  //   const [toggle, setToggle] = useState(true);

  const [toggle, setToggle] = useToogle(true);

  //   const toggleHandler = () => {
  //     setToggle(!toggle);
  //   };

  return (
    <>
      <div onClick={setToggle}>
        <h2>Toggling Behaviour</h2>

        <h2>
          <button>Toggle the img</button>
        </h2>
      </div>
      {toggle ? (
        <figure>
          <img src='https://images.unsplash.com/photo-1719937206667-ac87c15ad3e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8' />
        </figure>
      ) : (
        <figure>
          <img src='https://plus.unsplash.com/premium_photo-1670738772747-c81429db3725?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8' />
        </figure>
      )}
    </>
  );
}

export default Card;
