import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BaseInfo from './components/BaseInfo';
import ScoreSummary from './components/ScoreSummary';
import CollapsibleText from '../../components/CollapsibleText';
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
            <div className="detail__module">
              <CollapsibleText height={112}>
                <div className="detail__overview">
                  天赋异禀的结巴少年秦风（刘昊然 饰）警校落榜，被姥姥遣送泰国找远房表舅——号称“唐人街第一神探”，实则猥琐的大叔唐仁（王宝强 饰）散心。不想一夜花天酒地后，唐仁沦为离奇凶案嫌疑人，不得不和秦风亡命天涯……穷追不舍的警探黄兰登（陈赫 饰）、无敌幸运的警察坤泰（肖央 饰）、穷凶极恶的匪帮三人组、高深莫测的唐人街教父、美艳风骚的老板娘阿香（佟丽娅 饰）等悉数登场！
                </div>
              </CollapsibleText>
            </div>
          </div>
        </div>
    );
  }
}

Detail.propTypes = {};

export default Detail;
