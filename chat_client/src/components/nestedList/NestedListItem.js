import React, { Component } from 'react';
import './NestedListItem.css'
export default class NestedListItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: true
    }
    // reusing this parent method signature for recursive component creation
    this.createChildrenNodes = this.props.createChildrenNodes.bind(this);
  }

  clickHandler = () => this.setState({ collapsed: !this.state.collapsed })

  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <button className={'NestedListItem'} onClick={() => this.clickHandler()}>
          <div>
            <span>{data.title ? data.title : `-`}</span>
            {
              data.data
              ? <span>{this.state.collapsed ? ' + ' : ' - '}</span>
              : null
            }
          </div>
        </button>
        <div>
        {
          this.state.collapsed
          ? null
          : data.data
            ? this.createChildrenNodes(data.data)
            : null
        }
        </div>
      </React.Fragment>
    )
  }
}
