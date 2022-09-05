import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          firstname="Jack"
          timeAgo="Today at 5:00 pm"
          image="one"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          firstname="Drew"
          timeAgo="Today at 2:50 pm"
          image="two"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          firstname="Jane"
          timeAgo="Yesterday at 1:00 pm"
          image="three"
        />
      </ApprovalCard>
    </div>
  );
};
ReactDom.render(<App />, document.querySelector("#root"));
