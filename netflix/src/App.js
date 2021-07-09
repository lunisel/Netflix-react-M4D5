import "./App.css";
import FetchMovies from "./Components/FetchMovies";

function App() {
  return (
    <>
      <FetchMovies saga="harry%20potter" />
      <FetchMovies saga="lord%20of%20the%20rings" />
    </>
  );
}

export default App;
