import React, { Component } from "react";
import "./App.css";
//import Post from "./components/js/Post.js";
import Header from "./components/js/Header.js";
import NewPost from "./components/js/NewPost";

//getResponse = async() => {
//const response = await fetch('/api/hello');
//const body = await response.json();
//if (response.status !== 200) throw Error(body.message);
//}

//state = {
//title: '',
//body: '',
//posts: [],
//};
//componentDidMount = () => {
//  this.getBlogPost
//}
//fetchData = () => {
//  axios.get('/api')
//    .then((response) =>
//    )
//}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="App-main">
          <NewPost
            nickname="Matt"
            avatar="https://images.unsplash.com/photo-1593965064762-5bba563b13ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=25&q=80"
            caption="Hello World!"
            image="https://images.unsplash.com/photo-1592395700467-a88c0da38c15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
          {/* more posts */}
        </section>
      </div>
    );
  }
}

//function App() {
//  const [posts, setPosts] = useState([
//    {
//      username: "Matt",
//      caption: "What a nice day!",
//      imageUrl:
//        "https://images.unsplash.com/photo-1506147854445-5a3f534191f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
//    },
//    {
//      username: "Dilshan",
//      caption: "WOW",
//      imageUrl:
//        "https://images.unsplash.com/photo-1567105339488-fbb61ca19b36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
//    },
//    {
//      username: "Thomas",
//      caption: "Sunset",
//      imageUrl:
//        "https://images.unsplash.com/photo-1594702296874-1fe2c8d2c731?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
//    },
//    {
//      username: "Atticus",
//      caption: "I hate the desert!",
//      imageUrl:
//        "https://images.unsplash.com/photo-1596374246413-caaca268d445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
//    },
//  ]);

//  return (
//    <div className="app">
//      {/* Header */}
//
//      <div className="app__header">
//        <h2>Murmur</h2>
//        <img
//          className="app__headerImage"
//          src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
//          alt=""
//        />
//      </div>
//      {/* POSTS */}
//
//      {posts.map((post) => (
//        <Post
//          username={post.username}
//          caption={post.caption}
//          imageUrl={post.imageUrl}
//        />
//      ))}
//    </div>
//  );
//}

export default App;
