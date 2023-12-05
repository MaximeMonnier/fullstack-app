import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

function Thread({ userId }) {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/post/").then((res) => setPost(res.data));
  }, []);

  return (
    <div className="thread-container">
      {posts
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .map((post) => (
          <Post key={post._id} post={post} userId={userId} />
        ))}
    </div>
  );
}

export default Thread;
