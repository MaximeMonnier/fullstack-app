import React, { useEffect, useState } from "react";
import LikePost from "./LikePost";
import axios from "axios";
import Deletepost from "./Deletepost";

function Post({ post, userId }) {
  const [isAuthor, setIsauthor] = useState(false);
  const [isedit, setIsEdit] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (post.author == userId) {
      setIsauthor(true);
    } else {
      setIsauthor(false);
    }
  }, [userId]);

  const handleEdit = () => {
    if (newMessage) {
      axios.put(`http://localhost:5000/post/${post._id}`, {
        message: newMessage,
      });
    }
  };

  const dateFormater = (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>{post.author}</h3>
        <p>posté le {dateFormater(post.createdAt)}</p>
      </div>
      {isedit ? (
        <div className="edit-container">
          <textarea
            defaultValue={post.message}
            onChange={(e) => setNewMessage(e.target.value)}
          ></textarea>
          <button
            onClick={() => {
              setIsEdit(false);
              handleEdit();
            }}
          >
            Valider edition
          </button>
        </div>
      ) : (
        <p>{newMessage ? newMessage : post.message}</p>
      )}
      <div className="icons-part">
        <LikePost post={post} userId={userId} />
        {isAuthor && (
          <div className="update-delete-icons">
            <span
              id="update-btn"
              onClick={() => {
                setIsEdit(!isedit);
                handleEdit();
              }}
            >
              &#10000;
            </span>
            <Deletepost postId={post._id} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
