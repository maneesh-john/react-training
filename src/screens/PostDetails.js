import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import { AppContext } from "../contexts/AppContext";

class PostDetails extends React.Component {

  static contextType = AppContext;

  render(){

    return(
      <div style={styles.container}>
        <Header title="Post Details" />
        <Card>
          <h1>Test</h1>
        </Card>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: "20px 50px"
  },
}

export default PostDetails;