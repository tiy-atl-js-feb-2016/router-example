import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import cookie from 'js-cookie';

export default class DashBar extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { user: cookie.get('user') }
  }

  handleSignOut() {
    cookie.remove('user');
     this.context.router.push('/login');
  }

  render() {
    return (
      <AppBar
        title="Acme Router App"
        style={{background: '#21252B'}}
        iconElementRight={<FlatButton onClick={::this.handleSignOut} label={`Sign Out ${this.state.user}`} />}
      />
    );
  }
}
