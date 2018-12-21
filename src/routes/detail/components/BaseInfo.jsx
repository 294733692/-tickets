import React from 'react';
import PropTypes from 'prop-types';
import './BaseInfo.css';

const BaseInfo = ({ onShowImage }) => {
  return (
    <div className="baseInfo">
      <div className="baseInfo__detail">
        <h3 className="baseInfo__name">唐人街探案</h3>
        <div className="baseInfo__subTitle">Detective Chinatown 2</div>
        <div className="baseInfo__other">喜剧 / 动作 / 剧情</div>
        <div className="baseInfo__other">中国大陆 | 130分钟</div>
        <div className="baseInfo__other">2018-02-16 08:00 在中国大陆上映</div>
      </div>
      <div className="baseInfo__poster" onClick={onShowImage} style={{ backgroundImage: 'url(/source/image/asset4.jpeg)'}} />
    </div>
  );
};
BaseInfo.propTypes = {
  onShowImage: PropTypes.func.isRequired,
};

export default BaseInfo;
