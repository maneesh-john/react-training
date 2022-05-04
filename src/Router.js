import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Posts from "./screens/Posts";
import PostDetails from "./screens/PostDetails";

function Router(){

  return(
    <BrowserRouter>
      {/* Routes */}
      <Switch>
        <Route exact path="/" component={Posts} />  {/* "component" instead of "element" */}
        <Route exact path="/post-details/:index" component={PostDetails} />
      </Switch>
    </BrowserRouter>
  );
}

// let ChildComponent = this.props.component
// return <ChildComponent history={history} ... />


export default Router;