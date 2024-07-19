import { Fragment } from "react"
import Navbar from "./components/navbar"
import Body from "./components/body"

function App() {

  const name = "Muskan";
  return (


    <>
      <Navbar></Navbar>

      <Body />
      <h1>I am learning React</h1>
      <h2>This is some other h2;</h2>
    </>
  )


}


export default App