import React from 'react';
import PropTypes from 'prop-types';
import './SeatSelected.css';

const seatSelected = ({ data }) => {
  return (
    <div className="seatSelected">
      <ul className="seatSelected__list">
        <li className="seatSelected__item movieTicket">
          <div className="movieTicket__detail">
            <div className="movieTicket__pos">5排03座</div>
            <div className="movieTicket__price"> <i className="movieTicket__tag">卡</i>33元</div>
          </div>
          <div className="movieTicket__close" />
        </li>
        <li className="seatSelected__item movieTicket">
          <div className="movieTicket__detail">
            <div className="movieTicket__pos">5排03座</div>
            <div className="movieTicket__price">33元</div>
          </div>
          <div className="movieTicket__close" />
        </li>
        <li className="seatSelected__item movieTicket">
          <div className="movieTicket__detail">
            <div className="movieTicket__pos">5排03座</div>
            <div className="movieTicket__price">33元</div>
          </div>
          <div className="movieTicket__close" />
        </li>
      </ul>
      <div className="seatSelected__buy">33元 确认选座</div>
    </div>
  );
};

seatSelected.PropTypes = {
  data: PropTypes.array,
};

export default seatSelected;
