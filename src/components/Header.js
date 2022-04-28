import React from "react";

class Header extends React.Component {

  render(){
    return <h1 style={styles.header}>{this.props.title}</h1>
  }
}

const styles = {
  header: {
    marginBottom: "15px",
    color: "#444",
    borderBottom: "2px solid #444"
  },
}

export default Header;