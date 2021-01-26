import React, { Component } from "react";
import classes from "./medium.module.css";
import axios from "axios";

class MediumCard extends Component {
  state = {
    post: null,
  };

  componentDidMount() {
    if (
      this.props.match.params.id !== null &&
      (this.state.post === null || this.props.match.params.id !== this.state.post.id)
    ) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id)
        .then((responce) => {
          console.log(responce["data"]["body"]);
          this.setState({
            post: responce.data,
          });
        });
    }
  }

  componentDidUpdate() {
    if (
      this.props.match.params.id !== null &&
      (this.state.post === null || this.props.match.params.id !== this.state.post.id.toString())
    ) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id)
        .then((responce) => {
          console.log(responce["data"]["body"]);
          this.setState({
            post: responce.data,
          });
        });
    }
  }

  shouldComponentUpdate(props, state) {
    //Very Complex Performance Improvement
    //(don't update only when:
    // next State and props are valid
    // current state is valid
    // current state is the next props)
    return (
      props.match.params.id !== null &&
      (state.post === null ||
        (state.post !== null &&
          (this.state.post === null || this.state.post.id.toString() !== props.match.params.id)))
    );
  }

  deletePost = () => {
    console.log(this.state.post.id)
    axios
      .delete(
        "https://jsonplaceholder.typicode.com/posts/" + this.state.post.id
      )
      .then((res) => {
        console.log(res)
        this.setState({
          post: null,
        });
      });
  };

  render() {
    let post = <h1 className={classes.Header}>Please Select a Post</h1>;
    if (this.props.post !== null) {
      post = <h1 className={classes.Header}>Loading ....</h1>;
    }
    if (this.state.post !== null) {
      post = (
        <React.Fragment>
          <h1 className={classes.Header}>{this.state.post.title}</h1>
          <div className={classes.Text}>{this.state.post["body"]}</div>
          <button className={classes.Button} onClick={this.deletePost}>
            <div className={classes.ButtonText}>Delete</div>
          </button>
        </React.Fragment>
      );
    }

    return <div className={classes.Layout}>{post}</div>;
  }
}

export default MediumCard;
