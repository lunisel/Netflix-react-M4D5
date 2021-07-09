
import "./App.css";
import FetchMovies from "./Components/FetchMovies";
import AddComments from './AddComments'

function App() {
  return (
    <>
      <FetchMovies saga="harry%20potter" />
      <FetchMovies saga="lord%20of%20the%20rings" />
      <FetchMovies saga="avengers" />
      <AddComments / >
    </>
  );
}

export default App;