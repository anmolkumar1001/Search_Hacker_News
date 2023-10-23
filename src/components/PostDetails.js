import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/PostDetails.css";

const PostDetails = ({ objectID }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://hn.algolia.com/api/v1/items/${objectID}`
      );
      setPost(result.data);
    };
    fetchData();
  }, [objectID]);

  if (!post) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="post-container">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-points">{post.points} points</p>
      <ul className="post-comments">
        {post.children.map((child) => (
          <li key={child.id}>
            <p className="post-comment-text">{child.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetails;
