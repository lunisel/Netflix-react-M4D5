import "./App.css";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import UnderNavbar from './components/UnderNavbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavBar />
      <UnderNavbar/>
      <Footer/>
    </>
  );
}

export default App;
