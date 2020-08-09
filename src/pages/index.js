import React from 'react';
import LogIn from './login';
import Documents from './documents';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogged: '',
    };
  }
  componentDidMount() {
    this.checkSessionStorage();
  }
  checkSessionStorage = () => {
    this.setState({userLogged: window.sessionStorage.getItem('logged')});
  }
  render() {
    if (this.state.userLogged === 'true') {
      return <Documents />
    } else {
      return <LogIn checkSession={this.checkSessionStorage}/>
    }
    // console.log(document.getElementById("__docusaurus"));
    // return(
    //   <div>fdfdfd</div>
    // )
  }
}

export default Home;
