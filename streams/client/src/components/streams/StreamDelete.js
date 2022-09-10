import React from "react";
import Modal from "../Modal";
import { useNavigate } from "react-router-dom";

const StreamDelete = () => {
  let nav = useNavigate();

  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );
  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => nav("/")}
      />
    </div>
  );
};

export default StreamDelete;
