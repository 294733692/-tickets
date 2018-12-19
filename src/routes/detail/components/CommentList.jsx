import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Star from '../../../components/Star';
import CollapsibleText from '../../../components/CollapsibleText';
import './CommentList.css';

class CommentList extends Component {
  render() {
    return (
      <ul className="commentList">
        <li>
          <div className="commentItem">
            <div className="commentUser">
              <div className="commentUser__avatar" style={{ backgroundImage: "url()"}}></div>
              <div className="commentUser__detail">
                <div className="commentUser__name">jack ma</div>
                <div className="commentUser__score"> <Star value={5}/> <span className="commentUser__value">5.0分</span></div>
              </div>
            </div>
            <CollapsibleText height={84}>
              唐仁（王宝强 饰）为巨额奖金欺骗秦风（刘昊然 饰）到纽约参加世界名侦探大赛，然而随着和世界各国侦探们啼笑皆非的较量，两人却发现了隐藏在这次挑战背后的更大秘展开,两人却发现了隐藏在这次挑战背后的更大秘展开
            </CollapsibleText>
            <div className="commentItem__detail">
              <div className="commentItem__time">01-28 16:30</div>
              <div className="commentItem__zan commentItem__zan--active">
                <i /> 123321
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="commentItem">
            <div className="commentUser">
              <div className="commentUser__avatar" style={{ backgroundImage: "url()"}}></div>
              <div className="commentUser__detail">
                <div className="commentUser__name">jack ma</div>
                <div className="commentUser__score"> <Star value={5}/> <span className="commentUser__value">5.0分</span></div>
              </div>
            </div>
            <CollapsibleText height={84}>
              唐仁（王宝强 饰）为巨额奖金欺骗秦风（刘昊然 饰）到纽约参加世界名侦探大赛，然而随着和世界各国侦探们啼笑皆非的较量，两人却发现了隐藏在这次挑战背后的更大秘展开,两人却发现了隐藏在这次挑战背后的更大秘展开
            </CollapsibleText>
            <div className="commentItem__detail">
              <div className="commentItem__time">01-28 16:30</div>
              <div className="commentItem__zan commentItem__zan--active">
                <i /> 123321
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="commentItem">
            <div className="commentUser">
              <div className="commentUser__avatar" style={{ backgroundImage: "url()"}}></div>
              <div className="commentUser__detail">
                <div className="commentUser__name">jack ma</div>
                <div className="commentUser__score"> <Star value={5}/> <span className="commentUser__value">5.0分</span></div>
              </div>
            </div>
            <CollapsibleText height={84}>
              唐仁（王宝强 饰）为巨额奖金欺骗秦风（刘昊然 饰）到纽约参加世界名侦探大赛，然而随着和世界各国侦探们啼笑皆非的较量，两人却发现了隐藏在这次挑战背后的更大秘展开,两人却发现了隐藏在这次挑战背后的更大秘展开
            </CollapsibleText>
            <div className="commentItem__detail">
              <div className="commentItem__time">01-28 16:30</div>
              <div className="commentItem__zan commentItem__zan--active">
                <i /> 123321
              </div>
            </div>
          </div>
        </li>
      </ul>
    );
  }
}

CommentList.propTypes = {};

export default CommentList;
