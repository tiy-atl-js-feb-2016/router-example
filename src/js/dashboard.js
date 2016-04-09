import React, { Component, PropTypes } from 'react';
import DashBar from './dash_bar';
import SideBar from './sidebar';

export default class Dashboard extends Component {

  render() {
    return (
      <div>
        <div style={{background: 'white', overflow: 'hidden'}}>
          <DashBar/>
          <aside>
            <SideBar/>
          </aside>
          <div className="main-content">
            {this.props.children}
          </div>
        </div>
        <footer style={{clear: 'both', color: '#999', textAlign: 'center', padding: 20}}>
           © 2016 Acme Router App
        </footer>
      </div>
    );
  }
}
