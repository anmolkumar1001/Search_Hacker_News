import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import PostDetails from "./components/PostDetails";
import "./App.css";

const App = () => {
  const [postID, setPostID] = useState(null);

  const handlePostClick = (objectID) => {
    setPostID(objectID);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Hacker News Reader</h1>
      {postID ? (
        <PostDetails objectID={postID} />
      ) : (
        <SearchBar onPostClick={handlePostClick} />
      )}
    </div>
  );
};

export default App;
