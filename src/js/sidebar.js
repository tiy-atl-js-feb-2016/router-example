import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Divider from 'material-ui/lib/divider';

export default class SideBar extends Component {

  render() {
    return (
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Divider/>
        <Link to="/section-a">Section A</Link>
        <Divider/>
        <Link to="/section-b">Section B</Link>
        <Divider/>
      </nav>
    );
  }
}
