// import logo from './logo.svg';
// import './App.css';
import About from './pages/About';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar />
      {/* <About /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
