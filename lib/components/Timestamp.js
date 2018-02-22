import React from 'react';
//import PropTypes from 'prop-types'

class Timestamp extends React.Component {
  render () {
    return (
      <div>
        {this.props.timestamp.toString()}
      </div>
    );
  }
}

export default Timestamp;
