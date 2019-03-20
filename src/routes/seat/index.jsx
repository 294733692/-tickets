import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import seatSelect from './reducers';
import { createStore } from 'redux';
import MovieInfo from './components/MovieInfo';
import SeatSelected from './components/SeatSelected';
import SeatSelecter from './container/SeatSelector';
import './index.css';

let store = createStore(seatSelect);

class Seat extends Component {
  // constructor(props) {
  //   super(props);
    // this.state = {
    //   selectSeat: []
    // };

    // this.addSeat = (seat) => {
    //   this.setState(prevState => ({
    //     selectSeat: [...prevState.selectSeat, seat]
    //   }));
    // }
    //
    // this.removeSeat = (id) => {
    //   this.setState({
    //     selectSeat: this.state.selectSeat.filter(seat => seat.id !== id)
    //   });
    // };
  // }
  render() {
    // const { selectSeat } = this.state
    return (
      <Provider store={store}>
        <div className="seat">
          <div className="tOperator">
            <i className="tOperator__icon tOperator__icon--blackBack" onClick={() => { window.history.back(); }}/>
            万达影院
            <i className="tOperator__icon tOperator__icon--blackShare" />
          </div>
          <MovieInfo />
          <div className="seat__main">
            <div className="seat__tip" />
            <div className="seat__graph">
              <div className="seat__screen">B13屏幕</div>
              {/*<div className="seat__map"><SeatSelecter  selectSeat={selectSeat} onAdd={this.addSeat} onRemove={this.removeSeat}/></div>*/}
              <div className="seat__map"><SeatSelecter /></div>
            </div>
          </div>
          <SeatSelected/>
        </div>
      </Provider>
    );
  }
}

Seat.propTypes = {};

export default Seat;
