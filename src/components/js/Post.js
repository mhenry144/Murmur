import React from "react";
import "../css/Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      {/* header -> avatar + username */}
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt=""
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>
      {/* image */}
      <img
        className="post__image"
        src="https://images.unsplash.com/photo-1506147854445-5a3f534191f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        alt=""
      />

      {/* username + caption */}
      <h4 className="post__text">
        <strong>Username</strong> Wow What a day!
      </h4>
    </div>
  );
}

export default Post;
