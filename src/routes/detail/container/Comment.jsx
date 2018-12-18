import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ScoreDistribute from '../components/ScoreDistribute';

class Comment extends Component {
  render() {
    return (
      <div className='mComment'>
        <ScoreDistribute />
      </div>
    );
  }
}

Comment.propTypes = {};

export default Comment;
