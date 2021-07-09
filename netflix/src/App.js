import "./App.css";
import FetchMovies from "./Components/FetchMovies";
import CommentsArea from "./CommentArea";

function App() {
  return (
    <>
      <FetchMovies saga="harry%20potter" />
      <FetchMovies saga="lord%20of%20the%20rings" />
      <FetchMovies saga="avengers" />
      <CommentsArea />
    </>
  );
}

export default App;
