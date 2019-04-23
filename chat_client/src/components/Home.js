import React, { Component } from 'react';
import { AppBar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { MdHome, MdAccountCircle } from 'react-icons/md';

class Home extends Component {
  render() {
    return (
      <div className={'Home'}>
        <AppBar className={this.props.classes.root}>
          <MdHome />
          <MdAccountCircle />
        </AppBar>
      </div>
    )
  }
}
const StyledHome = withStyles({
  root: {
    display: 'grid',
    gridTemplate: '1fr / 1fr 1fr'
  }
})(Home)

export default StyledHome;
