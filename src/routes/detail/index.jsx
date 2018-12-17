import React, {Component} from 'react';
import PropTypes from 'prop-types';
import request from '../../helpers/request';
import BaseInfo from './components/BaseInfo';
import ScoreSummary from './components/ScoreSummary';
import CollapsibleText from '../../components/CollapsibleText';
import Artist from './components/Artist';
import './index.css';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist : [],
    }

    this.getArtist = async () => {
      const data = await request('/artist');

      if (data && data.length) {
        this.setState({
          artist: data
        });
      }
    };
  }


  componentDidMount() {
    this.getArtist();
  }


  render() {

    const { artist }= this.state;

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
              <CollapsibleText height={84}>
                <div className="detail__overview">
                  唐仁（王宝强 饰）为巨额奖金欺骗秦风（刘昊然 饰）到纽约参加世界名侦探大赛，然而随着和世界各国侦探们啼笑皆非的较量，两人却发现了隐藏在这次挑战背后的更大秘展开,两人却发现了隐藏在这次挑战背后的更大秘展开
                </div>
              </CollapsibleText>
            </div>
            <div className="detail__module">
              <h3 className="detail__moduleTitle">演职人员</h3>
              <Artist data={artist}/>
            </div>
          </div>
        </div>
    );
  }
}

Detail.propTypes = {};

export default Detail;
