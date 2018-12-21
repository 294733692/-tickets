import React from 'react';
import PropTypes from 'prop-types';
import './SeatSelected.css';

const seatSelected = ({ data }) => {
  return (
    <div className="searSelected">
      <ul className="searSelected__list">
        <li className="searSelected__item movieTicket">
          <div className="movieTicket__detail">
            <div className="movieTicket__pos">5排03座</div>
            <div className="movieTicket__price"> <i className="movieTicket__tag">卡</i>33元</div>
          </div>
          <div className="movieTicket__close" />
        </li>
        <li className="searSelected__item movieTicket">
          <div className="movieTicket__detail">
            <div className="movieTicket__pos">5排03座</div>
            <div className="movieTicket__price">33元</div>
          </div>
          <div className="movieTicket__close" />
        </li>
        <li className="searSelected__item movieTicket">
          <div className="movieTicket__detail">
            <div className="movieTicket__pos">5排03座</div>
            <div className="movieTicket__price">33元</div>
          </div>
          <div className="movieTicket__close" />
        </li>
      </ul>
      <div className="searSelected__buy">33元 确认选座</div>
    </div>
  );
};

seatSelected.PropTypes = {
  data: PropTypes.array,
};

export default seatSelected;
