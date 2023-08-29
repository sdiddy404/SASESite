import logo from "./logo.svg";
import Button from "react-bootstrap/Button";
import Home from "./pages/home";
import About from "./pages/About";
import Events from "./pages/Events2";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
    <NavBar />
    {/* <About /> */}
    {/* <Home /> */}
      {/* <Events /> */}
      <Contact />
    </>
  );
}

export default App;
