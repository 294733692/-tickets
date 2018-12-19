import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ScoreDistribute from '../components/ScoreDistribute';
import TagList from '../components/TagList';
import CommentList from '../components/CommentList';

class Comment extends Component {
  render() {
    return (
      <div className='mComment'>
        <ScoreDistribute />
        <div style={{ marginTop: 16}}>
          <TagList />
        </div>
        <div style={{ marginTop: 16}}>
          <CommentList />
        </div>
      </div>
    );
  }
}

Comment.propTypes = {};

export default Comment;
