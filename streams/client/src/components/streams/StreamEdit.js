import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

function getParamId() {
  return window.location.pathname.replace(/\D/g, "");
}

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(getParamId());
  }

  onSubmit = (formValues) => {
    this.props.editStream(getParamId(), formValues);
  };

  render() {
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log({ stream: state.streams[getParamId()] });
  return { stream: state.streams[getParamId()] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
