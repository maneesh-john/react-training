import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Posts from "./screens/Posts";
import PostDetails from "./screens/PostDetails";

function Router(){

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/post-details/:index" component={PostDetails} />
      </Switch>
    </BrowserRouter>
  );
}



export default Router;