import React, {Component} from 'react';
import ScoreDistribute from '../components/ScoreDistribute';
import TagList from '../components/TagList';
import CommentList from '../components/CommentList';
import request from "../../../helpers/request";

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      comments: [],
      current: '', // 当前选中的标签
    };

    this.getData = async () => {
      const { tags, list } = await request('/comment');

      this.setState({
        tags,
        comments: list,
        current: tags[0] ? tags[0].text : ''
      });
    };

    //  改变搜索条件
    this.changeTag = value => {
      this.setState({
        current: value
      });
    };
    this.toggleZan = id => {
      this.setState((prevState) => ({
        comments: prevState.comments.map(comment => {
          if (comment.id === id) {
            return {
              ...comment,
              isZan: !comment.isZan,
              zan: comment.isZan ? --comment.zan : ++comment.zan
            };
          }
          return {...comment};
        })
      }));
    };
  }

  componentDidMount() {
    this.getData();
  }


  render() {
    const { tags, comments, current } = this.state;
    const fliterComments = comments.filter(comment => comment.tag === current);
    return (
      <div className='mComment'>
        <ScoreDistribute />
        <div style={{ marginTop: 16}}>
          <TagList  data={tags} current={current} onClick={this.changeTag}/>
        </div>
        <div style={{ marginTop: 16}}>
          <CommentList data={fliterComments} onClickZan={this.toggleZan}/>
        </div>
      </div>
    );
  }
}


export default Comment;
