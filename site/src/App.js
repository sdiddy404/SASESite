import Home from "./pages/home";
import About from "./pages/About";
import Events from "./pages/Events2";
import Contact from "./pages/Contact";

import { BrowserRouter as Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/about" Component={About} />
        <Route path="/events" Component={Events} />
        <Route path="/contact" Component={Contact} />
        <Route path="/" Component={About} />
      </Routes>
    </>
  );
}

export default App;
