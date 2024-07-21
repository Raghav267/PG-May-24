import Welcome from "./Welcome";

function Greet(props) {
  const { name, age } = props;
  return (
    <>
      This is Greet Componenet {age}
      <Welcome name={name}>This is written in between</Welcome>
    </>
  );
}

export default Greet;
