import React, { Component } from 'react';
import NewLayout from './components/NewLayout';
// import { auth } from './base';
import './App.css';
import { postsRef } from './constants/firebase'

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
    postsRef.on('value', (snapshot) => {
      let posts = snapshot.val();
      let newState = Object.keys(posts || {}).map(key => {
        return {
          id: key,
          subject: posts[key].subject,
          links: posts[key].links,
          text: posts[key].text
        }
      })

      this.setState({
        loading: false,
        posts: newState
      });
    });

    console.log(this.state);
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
