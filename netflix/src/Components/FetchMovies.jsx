import { Component } from "react";
import DisplayMovies from "./Carousel";

class FetchMovies extends Component {
  state = {
    query: this.props.saga,
    arrMovies: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=e7302d6b&s=" +
          this.props.saga
      );
      if (response.ok) {
        let search = await response.json();
        let movies = search.Search;
        this.setState({
          arrMovies: movies,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    console.log(this.state.arrMovies);
    return (
      <>
        <DisplayMovies arrMovies={this.state.arrMovies} />
      </>
    );
  }
}

export default FetchMovies;
