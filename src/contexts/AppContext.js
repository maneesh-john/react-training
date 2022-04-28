import React from "react";

export const AppContext = React.createContext(null);

function AppProvider(props) {
  
  const [posts, setPosts] = React.useState([]);

  return (
    <AppContext.Provider value={{
        posts: posts,
        setPosts: setPosts
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
