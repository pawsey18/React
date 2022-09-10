import React, { Component } from "react";
import { fetchStream } from "../../actions";
import { connect } from "react-redux";
function getParamId() {
  return window.location.pathname.replace(/\D/g, "");
}

class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchStream(getParamId());
  }
  render() {
    if (!this.props.stream) {
      return <div>StreamShow</div>;
    }
    const { title, description } = this.props.stream;

    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[getParamId()] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
