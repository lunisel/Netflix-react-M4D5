import "./App.css";
import FetchMovies from "./Components/FetchMovies";
import CommentsArea from "./CommentArea";
import NavBar from './Components/NavBar'
import UnderNavbar from './Components/UnderNavbar'
import Footer from './Components/Footer'

function App() {
  return (
    <>
    <NavBar/>
    <UnderNavbar/>
      <FetchMovies saga="harry%20potter" />
      <FetchMovies saga="lord%20of%20the%20rings" />
      <FetchMovies saga="avengers" />
      <CommentsArea />
      <Footer/>
    </>
  );
}

export default App;
