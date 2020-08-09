import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      errMessage: '',
      errorDisplay: 'none'
    };
  }
  handleUserName = (event) => {
    this.setState({ userName: event.target.value });
  }
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  }
  logIn = () => {
    if (((this.state.userName || this.state.password) == '') || (this.state.userName !== 'developers@ganitinc.com' || this.state.password !== 'G@nit@123')) {
      this.setState({ errorDisplay: 'block', errMessage: 'Username / Password is incorrect' });
      setTimeout(() => {
        this.setState({ errorDisplay: 'none' })
      }, 5000)
    } else {
      window.sessionStorage.setItem('logged', true);
      window.sessionStorage.setItem('user', 'Ganit Dev');
      this.props.checkSession();
    }
  }
  render() {
    return (
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div style={{ display: this.state.errorDisplay }} className="w-20 bg-red white tc br4 pa3 mr3 f5 mt5 absolute top-0 right-0">{this.state.errMessage}</div>
        <div className="flex flex-column items-center pa4 bg-ganit-blue br4 b--solid" style={{ marginTop: 100 }}>
          <div>
            <img src="/img/ganit.png" className="br-100" />
          </div>
          <form>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="username"
              autoComplete="email"
              autoFocus
              value={this.state.userName}
              onChange={this.handleUserName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </form>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 16 }}
            onClick={this.logIn}
          >
            Log In
        </Button>
        </div>
      </Container >
    )
  }
}