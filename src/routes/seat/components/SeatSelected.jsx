import React from 'react';
import PropTypes from 'prop-types';
import './SeatSelected.css';

const seatSelected = ({ data, onRemove }) => {
  return (
    <div className="seatSelected">
      <ul className="seatSelected__list">
        {
          data.map(seat => (
            <li key={seat.id} className="seatSelected__item movieTicket">
              <div className="movieTicket__detail">
                <div className="movieTicket__pos">{seat.rowIndex}排{seat.colIndex}座</div>
                <div className="movieTicket__price"> <i className="movieTicket__tag">卡</i>33元</div>
              </div>
              <div className="movieTicket__close"  onClick={() => onRemove(seat.id)}/>
            </li>
          ))
        }
      </ul>
      <div className="seatSelected__buy">33元 确认选座</div>
    </div>
  );
};

seatSelected.PropTypes = {
  data: PropTypes.func.isRequired,
};

export default seatSelected;
