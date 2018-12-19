import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TagList.css';

class tagList extends Component {
  render() {
    return (
      <div className="tagList">
        <span className="tagList__item">全部</span>
        <span className="tagList__item">好评 123321123</span>
        <span className="tagList__item">最新</span>
        <span className="tagList__item">最新</span>
        <span className="tagList__item">最新</span>
        <span className="tagList__item">最新</span>
        <span className="tagList__item">最新</span>
      </div>
    );
  }
}

tagList.propTypes = {};

export default tagList;
