import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BaseInfo from './components/BaseInfo';
import ScoreSummary from './components/ScoreSummary';
import './index.css';

class Detail extends Component {
  render() {
    return (
        <div className="detail">
          <div className="detail__top">
            <div className="tOperator">
              <div className="tOperator__icon tOperator__icon--back"></div>
              <div className="tOperator__icon tOperator__icon--share"></div>
            </div>
            <BaseInfo />
          </div>
          <div className="detail__content">
            <div className="detail__module">
              <ScoreSummary />
            </div>
          </div>
        </div>
    );
  }
}

Detail.propTypes = {};

export default Detail;
