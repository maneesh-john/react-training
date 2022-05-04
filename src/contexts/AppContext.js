import React from "react";

export const AppContext = React.createContext(null);

function AppProvider(props) {
  
  const [posts, setPosts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false); // useReducer

  return (
    <AppContext.Provider value={{
        posts: posts,
        setPosts: setPosts,
        isLoading: isLoading,
        setLoader: setIsLoading
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
