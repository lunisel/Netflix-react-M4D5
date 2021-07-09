import React from "react";
import CommentsList from "./CommenstList";
import AddComments from "./AddComments";

class CommentsArea extends React.Component {
  state = {
    updated: false,
  };

  commentsUpdated = () => {
    this.setState({ updated: true }, () => this.setState({ updated: false }));
  };

  render() {
    return (
      <>
        <CommentsList
          imdbID={this.props.id}
          commentsUpdated={this.commentsUpdated}
          updated={this.state.updated}
        />
        <AddComments
          imdbID={this.props.id}
          commentsUpdated={this.commentsUpdated}
        />
      </>
    );
  }
}

export default CommentsArea;
