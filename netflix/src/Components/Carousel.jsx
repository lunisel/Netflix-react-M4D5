import { Component } from "react";
import { Carousel, Row, Col } from "react-bootstrap";

class DisplayMovies extends Component {
  state = {
    movies: this.props.arrMovies,
  };

  render() {
    console.log(this.state.movies);
    return (
      <Carousel>
        <Carousel.Item>
          <Row style={{ height: "10rem" }}>
            {this.state.movies.slice(0, 5).map((m) => (
              <Col key={m.imdbID}>
                <img src={m.Poster} className="img-fluid" alt="movie-cover" />
              </Col>
            ))}
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row style={{ height: "10rem" }}>
            {this.state.movies.slice(5, 10).map((m) => (
              <Col key={m.imdbID}>
                <img src={m.Poster} className="img-fluid" alt="movie-cover" />
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default DisplayMovies;
