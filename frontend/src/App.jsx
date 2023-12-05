import React, { useState } from "react";
import Thread from "./components/Thread";
import NewPost from "./components/NewPost";

function App() {
  const [userId, setUserId] = useState("");

  return (
    <div className="app-container">
      <div className="login">
        <h3>Bonjour</h3>
        <input
          type="text"
          placeholder="pseudo"
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <NewPost userId={userId}/>
      <Thread userId={userId}/>
    </div>
  );
}

export default App;
