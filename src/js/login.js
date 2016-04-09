// React
import React, { Component, PropTypes } from 'react';
// Form Serializer
import SerialForm from 'react-simple-serial-form';
// Progress Bar
import NProgress from 'react-nprogress';
// Cookie Handler
import cookie from 'js-cookie';
// Material UI
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Snackbar from 'material-ui/lib/snackbar';


// Inline styles

const paperStyle = {
  width: '400px',
  margin: '100px auto'
}

const headingStyle = {
  padding: '20px'
}

const textFieldStyle = {
  marginLeft: 20,
};

const buttonStyle = {
  margin: 20,
};

// Component

export default class Login extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {loginError:false}
  }

  dataHandler({user, pass}) {
    NProgress.start();
    // simulated loging in
    setTimeout(() => {
      NProgress.done();
      if (user === 'jd' && pass === 'jd') {
        cookie.set('user', user);
        this.context.router.push('/dashboard');
      } else {
        this.setState({loginError:true});
      }
    }, 500);
  }

  render() {
    return (
      <div>
      <Paper zDepth={2} style={paperStyle}>
        <h1 style={headingStyle}>Sign In</h1>
        <SerialForm onData={::this.dataHandler}>
          <TextField name="user" hintText="Username" style={textFieldStyle} underlineShow={false} />
          <Divider />
          <TextField name="pass" hintText="Password" style={textFieldStyle} underlineShow={false} type="password" />
          <Divider />
          <div style={{textAlign: 'right'}}>
            <RaisedButton type="submit" label="Sign In" primary={true} style={buttonStyle} />
          </div>
        </SerialForm>
      </Paper>
      <Snackbar
        open={this.state.loginError}
        message="Incorrect Username or Password"
        onRequestClose={() => this.setState({loginError:false})}
      />
      </div>
    );
  }
}
