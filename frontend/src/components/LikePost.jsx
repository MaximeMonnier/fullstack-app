import React, { useEffect, useState } from "react";
import axios from "axios";

function LikePost({ post, userId }) {
  console.log(post);
  console.log(userId);

  const [userLiked, setUserLike] = useState(false);

  useEffect(() => {
    if (post.likers) {
      if (post.likers.includes(userId)) {
        setUserLike(true);
      } else {
        setUserLike(false);
      }
    }
  }, [userId]);

  const likePost = () => {
    axios.patch(`http://localhost:5000/post/like-post/${post._id}`, { userId });

    setUserLike(true)
  };
  const dislikePost = () => {
    axios.patch(`http://localhost:5000/post/dislike-post/${post._id}`, { userId });
    setUserLike(false)
  };

  return (
    <div className="like-icon">
      <p>{post.likers ? post.likers.length : 0}</p>
      {userLiked ? (
        <span id="like-btn" onClick={() => dislikePost()}>
          &#9829;
        </span>
      ) : (
        <span id="dislike-btn" onClick={() => likePost()}>
          &#9829;
        </span>
      )}
    </div>
  );
}

export default LikePost;
