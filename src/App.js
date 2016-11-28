import React, { Component } from 'react';
import Layout from "./components/Layout";
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
  if(error) {
    console.log(error, user);
  } else {
    console.log('success')
  }
};

base.authWithPassword({
  email    : 'bobtony@firebase.com',
  password : 'correcthorsebatterystaple'
}, authHandler);


class App extends Component {
  constructor(){
    super();
    this.state = {
      header_title: 'This is my React Blog',
      intro: 'Documenting My ReactJS Journey',
      posts: [],
      loading: true
    }

  }

  componentDidMount(){
    // debugger
    this.ref  = base.syncState(`/posts`, {
      context: this,
      state: 'posts',
      then() {
        this.setState({loading: false})
      }
    });
    // debugger

  }

  updateAppState(currentPosts) {
    debugger
    this.setState({posts: currentPosts});
  }

  render() {
    return (
      <div className="App">
        { this.state.loading === true ? <h3> LOADING... </h3> : <Layout updateAppState={ this.updateAppState.bind(this) } pageData={this.state} /> }
      </div>
    );
  }
}

export default App;
