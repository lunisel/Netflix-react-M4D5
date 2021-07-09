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
      <FetchMovies saga="harry%20potter" title="Harry Potter Saga" />
      <FetchMovies
        saga="lord%20of%20the%20rings"
        title="Lord of the Rings Saga"
      />
      <FetchMovies saga="avengers" title="The Avengers Saga" />
      <CommentsArea />
      <Footer/>
    </>
  );
}

export default App;
