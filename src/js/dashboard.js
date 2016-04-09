import React, { Component, PropTypes } from 'react';
import DashBar from './dash_bar';
import DashCard from './dash_card';

export default class Dashboard extends Component {

  render() {
    return (
      <div>
        <DashBar/>
        <DashCard/>
      </div>
    );
  }
}
