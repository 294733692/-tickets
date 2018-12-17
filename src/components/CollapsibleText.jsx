import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './CollapsibleText.css';

class CollapsibleText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCollapse: false,
      isNeedCollapse: false
    };

    this.defaultProps = {
      height: 84
    }

    this.toggleStatus = () => {
      if ( this.state.isNeedCollapse){
        this.setState((prevState) =>({
          isCollapse: !prevState.isCollapse
        }));
      }
    };
  }



  componentDidMount() {
    const dom = ReactDOM.findDOMNode(this);
    const value = this.props.height

    console.log(dom.clientHeight)
    if( dom.clientHeight > value ){
        this.setState({
          isCollapse: true,
          isNeedCollapse: true
        });
    }
  }

  render() {
    const { isCollapse } = this.state
    const cls = isCollapse ? 'collapsibleText--collapse' : ''
    const maxHeight = isCollapse ? this.props.height: 'auto'

    return (
      <div className={`collapsibleText ${cls}`} style={{ maxHeight: maxHeight }} onClick={this.toggleStatus}>
        { this.props.children }
        { this.state.isCollapse && <div className="collapsibleText__label">展开</div> }
      </div>
    );
  }
}

CollapsibleText.propTypes = {
  children: PropTypes.any,
  height: PropTypes.number
};

export default CollapsibleText;
