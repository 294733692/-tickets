import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MovieInfo from './components/MovieInfo';
import SeatSelected from './components/SeatSelected';
import SeatSelecter from './container/SeatSelector';
import './index.css';

class Seat extends Component {
  render() {
    return (
      <div className="seat">
        <div className="tOperator">
          <i className="tOperator__icon tOperator__icon--blackBack" />
          万达影院
          <i className="tOperator__icon tOperator__icon--blackShare" />
        </div>
        <MovieInfo />
        <div className="seat__main">
          <div className="seat__tip" />
          <div className="seat__graph">
            <div className="seat__screen">B13屏幕</div>
            <div className="seat__map"><SeatSelecter /></div>
          </div>
        </div>
        <SeatSelected />
      </div>
    );
  }
}

Seat.propTypes = {};

export default Seat;
