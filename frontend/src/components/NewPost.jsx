import React, { useState } from "react";
import axios from "axios";

function NewPost({ userId }) {
  const [message, setMessage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    console.log("ok toto");

    axios
      .post("http://localhost:5000/post/", {
        message: message,
        author: userId,
      })
      .then((response) => {
        console.log("Réponse du serveur :", response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête :", error.message);
        if (error.response) {
          console.error("Réponse du serveur :", error.response.data);
          console.error("Statut du serveur :", error.response.status);
        } else if (error.request) {
          console.error("Aucune réponse reçue du serveur");
        } else {
          console.error(
            "Erreur lors de la configuration de la requête :",
            error.message
          );
        }
      });

      setMessage("");
  };

  return (
    <form className="new-post-container" onSubmit={handleForm}>
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Quoi de neuf?"
        value={message}
      ></textarea>
      <input type="submit" value="Envoyer" />
    </form>
  );
}

export default NewPost;
