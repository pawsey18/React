import React from "react";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={"https://robohash.org/" + props.image} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">
          Wow, very cool post dick weed! {props.firstname}
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
