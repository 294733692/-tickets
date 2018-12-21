import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MovieInfo from './components/MovieInfo';
import SeatSelected from './components/SeatSelected';
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
        <SeatSelected />
      </div>
    );
  }
}

Seat.propTypes = {};

export default Seat;
