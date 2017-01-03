import React, { Component } from 'react';
import NewLayout from './components/NewLayout';
import Base from './helpers/Auth';
import './App.css';

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
    // base.authWithPassword({
    //   email    : this.state.user.email,
    //   password :  this.state.user.password
    // }, authHandler);

    this.ref  = Base.syncState(`/posts`, {
      context: this,
      state: 'posts',
      then() {
        this.setState({loading: false})
      }
    });
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
