import React from "react";
import { AppContext } from "../contexts/AppContext";
import Header from "../components/Header";
import Card from "../components/Card";

class Posts extends React.Component {

  static contextType = AppContext;

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/").then((response) => {
      response.json().then((data) => {
        this.context.setPosts(data);
      });
    });
  }

  renderPost() {
    return this.context.posts.map((post, index) => {
      return (
        <Card
          key={post.id}
          onClick={() => this.props.history.push("/post-details/" + index)}
        >
          <h3 style={styles.postHeader}>
            {post.id}. {post.title}
          </h3>
        </Card>
      );
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <Header title="Posts" />
        {this.renderPost()}
      </div>
    );
  }
}

const styles = {
  container: {
    padding: "20px 50px"
  },
  postHeader: {
    fontSize: "14px",
    color: "#34495e"
  }
};

export default Posts;
