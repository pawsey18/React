import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

function getParamId() {
  return window.location.pathname.replace(/\D/g, "");
}

class StreamDelete extends React.Component {
  // let nav = useNavigate();
  componentDidMount() {
    this.props.fetchStream(getParamId());
  }
  renderActions() {
    const id = getParamId();

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to={"/"} className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete the stream with ${this.props.stream.title}`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log({ stream: state.streams[getParamId()] });
  return { stream: state.streams[getParamId()] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
