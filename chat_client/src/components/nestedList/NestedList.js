import React, { Component } from 'react';
import NestedListItems from './NestedListItem';
import './NestedList.css';

class NestedList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: [...Array(this.props.list.length).keys()].map(() => true) // all trees collpased by default
    }
  }

  clickHandler = index => {
    const collapsed = Array.from(this.state.collapsed);
    collapsed.splice(index, 1, !collapsed[index])
    this.setState({ collapsed: collapsed })
  }

  render() {
    const { list } = this.props;
    return (
      <div className={'NestedList'}>
        {
          list.map((elem, index) => {
            return (
              <button key={elem.title + index} className={'NestedList_Root'} onClick={() => this.clickHandler(index)}>
                <div>
                  <span>{elem.title ? elem.title : `Element_${index}`}</span>
                  <span>{this.state.collapsed[index]? ' + ' : ' - '}</span>
                  {
                    elem.data && !this.state.collapsed[index]
                    ? <NestedListItems data={elem.data} />
                    : null
                  }
                </div>
              </button>
            )
          })
        }
      </div>
    )
  }
}

export default NestedList;
