import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/js/Post.js";
import { db } from "./firebase.js";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, Input } from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // useEffect runs piece of code based on specific condition
  useEffect(() => {
    // listener, every time a post occurs, this code runs
    db.collection("posts").onSnapshot((snapshot) => {
      // loop through all documents to find a specific doc
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  const signUp = (event) => {

  }

  return (
    <div className="app">
      <Modal
        open={open}
        //looks for clicks outside of the modal
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <center>
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button onClick={signUp}>Sign Up</Button>

          </center>
        </div>
      </Modal>

      {/* Header */}
      <div className="app__header">
        <h2>Murmur</h2>
        <img
          className="app__headerImage"
          src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
          alt=""
        />
      </div>

      <Button onClick={() => setOpen(true)}>Sign Up</Button>
      {/* POSTS */}

      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
