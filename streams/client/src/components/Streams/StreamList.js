import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin(item) {
    if (item.userId === this.props.currentUserId)
      return (
        <div className="right floated content">
          <Link to={`streams/edit/${item.id}`} className="ui button primary">Edit</Link>
          <Link to={`streams/delete/${item.id}`} className="ui button negative"> Delete</Link>
        </div>
      )
  }
  renderList() {
    return (
      this.props.streams.map(item => {
        return (
          <div className="item" key={item.id}>
            {this.renderAdmin(item)}
            <i className="large middle aligned icon camera" />
            <div className="content">
              <Link to={`streams/${item.id}`} className="header">{item.title}</Link>
              <div className="description">{item.description}</div>
            </div>
          </div>
        )
      })
    )
  }
  createStreamBtn() {
    if (this.props.isSignIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary" >Create a Stream</Link>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.createStreamBtn()}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.stream),
    currentUserId: state.auth.userId,
    isSignIn: state.auth.isSignedIn,
  }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);