import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import { AppContext } from "../contexts/AppContext";

class PostDetails extends React.Component {

  static contextType = AppContext;

  render(){

    const { index } = this.props.match.params;
    const selectedPost = this.context.posts?.[index];

    return(
      <div style={styles.container}>
        <Header title="Post Details" />
        <Card>
          <h1 style={styles.header}>{selectedPost.title}</h1>
          <p style={styles.content}>{selectedPost.body}</p>
          <div style={styles.group}>
            <p style={styles.subText}>Post id: {selectedPost.id}</p>
            <p style={styles.subText}>Author id: {selectedPost.userId}</p>
          </div>
        </Card>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: "20px 50px"
  },
  header: {
    textTransform: "capitalize",
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "20px"
  },
  content: {
    marginBottom: "15px"
  },
  group: {
    display: "flex",
    justifyContent: "space-between"
  },
  subText: {
    fontSize: "15px",
    fontWeight: "bold",
    color: "#555"
  }
}

export default PostDetails;