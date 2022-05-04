import React from "react";

// isLoading

class Loader extends React.Component {

  render(){
    if(this.props.isLoading){
      return(
        <div style={styles.wrapper}>
          <div style={styles.loader}>
            <h3>Loading...</h3>
          </div>
        </div>
      );
    }

    return null;
  }
}

const styles = {
  wrapper: {
    position: "fixed",
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,.2)"
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100px",
    height: "100px",
    transform: "translate(-50%,-50%)",
    // borderRadius: "50%",
    // border: "3px solid red"
  }
}

export default Loader;