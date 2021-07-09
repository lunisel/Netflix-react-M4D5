import { Component } from "react";
import { Carousel, Row, Col } from "react-bootstrap";

class DisplayMovies extends Component {
  state = {
    movies: this.props.arrMovies,
  };

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <Row>
            <Col>
              <img src="#" className="img-fluid" alt="movie-cover" />
            </Col>

            <Col>
              <img
                src="placehold.it/300x200"
                className="img-fluid"
                alt="movie-cover"
              />
            </Col>

            <Col>
              <img
                src="placehold.it/300x200"
                className="img-fluid"
                alt="movie-cover"
              />
            </Col>

            <Col>
              <img
                src="placehold.it/300x200"
                className="img-fluid"
                alt="movie-cover"
              />
            </Col>

            <Col>
              <img
                src="placehold.it/300x200"
                className="img-fluid"
                alt="movie-cover"
              />
            </Col>

            <Col>
              <img
                src="placehold.it/300x200"
                className="img-fluid"
                alt="movie-cover"
              />
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col>
              <img
                src="placehold.it/300x200"
                className="img-fluid"
                alt="movie-cover"
              />
            </Col>

            <Col>
              <img
                src="placehold.it/300x200"
                className="img-fluid"
                alt="movie-cover"
              />
            </Col>

            <Col>
              <img
                src="placehold.it/300x200"
                className="img-fluid"
                alt="movie-cover"
              />
            </Col>

            <Col>
              <img
                src="placehold.it/300x200"
                className="img-fluid"
                alt="movie-cover"
              />
            </Col>

            <Col>
              <img
                src="placehold.it/300x200"
                className="img-fluid"
                alt="movie-cover"
              />
            </Col>

            <Col>
              <img
                src="placehold.it/300x200"
                className="img-fluid"
                alt="movie-cover"
              />
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col>
              <img
                src="placehold.it/300x200"
                className="img-fluid"
                alt="movie-cover"
              />
            </Col>

            <Col>
              <img
                src="placehold.it/300x200"
                className="img-fluid"
                alt="movie-cover"
              />
            </Col>

            <Col>
              <img
                src="placehold.it/300x200"
                className="img-fluid"
                alt="movie-cover"
              />
            </Col>

            <Col>
              <img
                src="placehold.it/300x200"
                className="img-fluid"
                alt="movie-cover"
              />
            </Col>

            <Col>
              <img
                src="placehold.it/300x200"
                className="img-fluid"
                alt="movie-cover"
              />
            </Col>

            <Col>
              <img
                src="placehold.it/300x200"
                className="img-fluid"
                alt="movie-cover"
              />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default DisplayMovies;
