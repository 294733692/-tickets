import React from 'react';
import PropTypes from 'prop-types';
import './Star.css';

/**
 * desc: 星星评分组件
 * props: value  评分 / 十分制  size 星星大小
 * */

const Star = ({ value, size = 15 }) => {
  return (
    <div className="star" style={{ height: size, width:size * 5 }}>
      <div className="star__top" style={{width: `${value * 10}%`}}></div>
    </div>
  );
};

Star.Proptypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.number,
}

export default Star;
