import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";


class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues)
    // if (formValues.title !== this.props.stream.title || formValues.description !== this.props.stream.description) {

    // }

  };

  render() {

    if (!this.props.stream) {
      return <div>Loading</div>
    }
    else {
      return (
        <div>
          <h3>Edit Stream</h3>
          <StreamForm
            onSubmit={this.onSubmit}
            initialValues={{ "title": this.props.stream.title, "description": this.props.stream.description }} />
        </div >
      )
    }

  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.stream[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);