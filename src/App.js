import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/js/Post.js";
import { db } from "./firebase.js";

function App() {
  const [posts, setPosts] = useState([
    
  ]);

  // useEffect runs piece of code based on specific condition

  useEffect(() => {
    // listener, every time a post occurs, this code runs
    db.collection("posts").onSnapshot((snapshot) => {
      
      // loop through all documents to find a specific doc
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id,
        post: doc.data()})));
    });
  }, []);

  return (
    <div className="app">
      {/* Header */}

      <div className="app__header">
        <h2>Murmur</h2>
        <img
          className="app__headerImage"
          src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
          alt=""
        />
      </div>
      {/* POSTS */}

      {posts.map(({id, post}) => (
        <Post key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
