import "./App.css";
import FetchMovies from "./Components/FetchMovies";
import CommentsArea from "./CommentArea";

function App() {
  return (
    <>
      <FetchMovies saga="harry%20potter" title="Harry Potter Saga" />
      <FetchMovies
        saga="lord%20of%20the%20rings"
        title="Lord of the Rings Saga"
      />
      <FetchMovies saga="avengers" title="The Avengers Saga" />
      <CommentsArea />
    </>
  );
}

export default App;
