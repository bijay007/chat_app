import React, { Component } from 'react';
import NestedListItem from './NestedListItem';
import './NestedList.css';

class NestedList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: [...Array(this.props.list.length).keys()].map(() => true) // all root trees collpased by default
    }
  }

  createChildrenNodes = list => {
    if (list.length) {
      let childrenWithHandlers = list.map((item, index) => {
        return (
          <NestedListItem key={index}
            data={item}
            createChildrenNodes={this.createChildrenNodes}
            styles={this.props.styles}
          />
        )
      })
      return childrenWithHandlers;
    }
  }

  render() {
    const { list, styles } = this.props;
    return (
      <div style={styles.listWrapper || {}}>
        {
          this.createChildrenNodes(list)
        }
      </div>
    )
  }
}

export default NestedList;
