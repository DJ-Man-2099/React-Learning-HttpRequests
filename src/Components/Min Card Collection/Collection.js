import classes from "./Collection.module.css";
import React, { useEffect, useState } from "react";
import Post from "./Mini Card/mini";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import MediumCard from "../Medium Card/medium";

const Collection = (props) => {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            Author: "Max",
          };
        });
        setPosts(updatedPosts);
      })
      .catch((err) => console.log(err));
  }, []);

  //How to go to another page using Code
  /* const goto = (id) => {
    props.history.push("/" + id);
  }; */

  const posts = Posts.map((post, index) => (
    <Link key={index} to={props.match.url+"/" + post.id}>
      <Post
        //key={index}
        Title={post.title}
        Author={post.Author}
        //onClick={goto.bind(this, post.id)}
      />
    </Link>
  ));

  return (
    <div>
      <div className={classes.Collection}>{posts}</div>
      {/** You can add a route to any component, and a link to it anywhere else, 
  and get its params passed from whereever you put the link */}
      <Route path={props.match.url+"/:id"} component={MediumCard} />
    </div>
  );
};

export default Collection;
