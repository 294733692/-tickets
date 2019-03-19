import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { data } from '../mock/seat';

const SEAT_WIDTH = 50;
const SEAT_HEIGHT = 50;
const ratio = window.devicePixelRatio;
const DRAW_SEAT_WIDTH = SEAT_WIDTH * ratio;
const DRAW_SEAT_HEIGHT = SEAT_HEIGHT * ratio;
const lastSeat = data[data.length - 1];
const CANVAS_WIDTH = lastSeat.colIndex * SEAT_WIDTH;
const CANVAS_HEIGHT = lastSeat.rowIndex * SEAT_HEIGHT;
const DRAW_CANVAS_WIDTH = CANVAS_WIDTH * ratio;
const DRAW_CANVAS_HEIGHT = CANVAS_HEIGHT * ratio;

// let col = 1;
// let row = 1;
// const CANVAS_WITH = data.forEach(seat => {
//   if (seat.rowIndex > row) {
//     row = seat.rowIndex;
//   }
//   if (seat.colIndex > col) {
//     col = seat.colIndex;
//   }
// })

class SeatSelector extends Component {
  constructor(props) {
    super(props);

    this.drawSeat = () => {
      const seatData = data;

      for (let i = 0; i < seatData.length; i++) {
        const {isSold, xPos, yPos} = seatData[i];
        const offsetLeft = (xPos - 1) * DRAW_SEAT_WIDTH;
        const offsetTop = (yPos - 1) * DRAW_SEAT_HEIGHT;
        if (isSold) {
          // 绘制已售样式
          this.ctx.drawImage(this.soldImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);
        } else {
          // 绘制空座样式
          this.ctx.drawImage(this.emptyImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);
        }
      }
    };
  };
  componentDidMount() {
    this.ctx = this.refs.canvas.getContext('2d');
    //加载需要的图片资源
    const emptyImage = new Image();
    const selectImage = new Image();
    const soldImage = new Image();
    let count = 0;

    const loadCallback = () => {
      count ++;
      if (count === 3) {
        this.emptyImage = emptyImage;
        this.selectImage = selectImage;
        this.soldImage = soldImage;
        this.drawSeat();
      }
    };

    emptyImage.onload = loadCallback;
    selectImage.onload = loadCallback;
    soldImage.onload = loadCallback;

    emptyImage.src = './source/seat-empty.png';
    selectImage.src = './source/seat-selected.png';
    soldImage.src = './source/seat-sold.png';
  }

  render() {
    return (
      <canvas style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }} ref="canvas" width={DRAW_CANVAS_WIDTH} height={DRAW_CANVAS_HEIGHT}/>
    );
  }
}

SeatSelector.propTypes = {};

export default SeatSelector;
