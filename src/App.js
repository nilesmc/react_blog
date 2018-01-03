import React, { Component } from 'react';
import NewLayout from './components/NewLayout';
import Rebase from 're-base';
import './App.css';

// Initialize Firebase
var base = Rebase.createClass({
  apiKey: "AIzaSyB4A8BMdNm_6l4coXFO5txGqdOJ2JmOHa8",
  authDomain: "reactblog-65b17.firebaseapp.com",
  databaseURL: "https://reactblog-65b17.firebaseio.com",
  storageBucket: "reactblog-65b17.appspot.com",
  messagingSenderId: "995756090207"
});
// firebase.initializeApp(config);

var authHandler = function(error, user) {
  debugger;
  if(error) {
    console.log(error, user);
  } else {
    console.log('success');
  }
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      header_title: 'This is my React Blog',
      intro: 'Documenting My ReactJS Journey',
      posts: [],
      loading: true,
      user: {
        email: 'mcgiver.niles@gmail.com',
        password : 'correcthorsebatterystaple'
      }
    }
    this.updateAppState = this.updateAppState.bind(this);
  }

  componentDidMount(){
    base.authWithPassword({
      email    : this.state.user.email,
      password :  this.state.user.password
    }, authHandler);
    this.ref  = base.syncState(`/posts`, {
      context: this,
      state: 'posts',
      then() {
        this.setState({loading: false})
      }
    });
    debugger
  }

  updateAppState(currentPosts) {
    this.setState({posts: currentPosts});
  }

  render() {
    return (
      <NewLayout pageData={this.state} updateAppState={this.updateAppState} children={this.props.children}/>
    );
  }
}

export default App;
