import React, { Component, Suspense } from "react";
import Collection from "../../Components/Min Card Collection/Collection";
import classes from "./Blog.module.css";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

//Lazy Rendering for on demand Size
const BigCard = React.lazy(()=>import('../../Components/Big Card/big'))

class Blog extends Component {
  render() {
    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName={classes.active} to="/posts" exact>
                  Home
                </NavLink>
              </li>
              <li>
                {/** add this for active class */}
                <NavLink activeClassName={classes.active} to="/new-post">
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
        <Route path="/new-post" render={ ()=>
          //Needed for Lazy Rendering
          <Suspense fallback={<div>Loading......</div>}><BigCard/></Suspense>
        }/>
        <Route path="/posts" component={Collection} />
        <Redirect from='/' to='/posts'/>
        </Switch>
      </div>
    );
  }
}

export default Blog;
