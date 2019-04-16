import React, { Component } from 'react';
import './NestedList.css';

class NestedList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className={'NestedList'}>
        {
          list.map((elem, index) => {
            return (
              <div className={'NestedList_Root'}>{elem.title ? elem.title : `Element_${index}`}</div>
            )
          })
        }
      </div>
    )
  }
}

export default NestedList;
