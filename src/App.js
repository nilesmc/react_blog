import React, { Component } from 'react';
import NewLayout from './components/NewLayout';
// import { auth } from './base';
import './App.css';
import { database } from './constants/firebase'

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

    // base.auth().signInWithEmailAndPassword(this.state.user.email, this.state.user.password).then(user => {
    //   //
    //   console.log('toot');
    //   console.log(user);
    // });


    // this.ref  = base.syncState(`/posts`, {
    //   context: this,
    //   state: 'posts',
    //   then() {
    //     this.setState({loading: false})
    //   }
    // });



    const postsRef = database.ref('posts');

    debugger

    postsRef.on('value', (snapshot) => {
      let posts = snapshot.val();
      let newState = [];
      for (let post in posts) {
        newState.push({
          id: post,
          title: posts[post].title,
          user: posts[post].user
        });
      }
      this.setState({
        posts: newState
      });
    });

    debugger

    console.log(this.state)
  }

  updateAppState(currentPosts) {
    this.setState({posts: currentPosts});
  }

  render() {
    return (
      <NewLayout
        pageData={this.state}
        updateAppState={this.updateAppState}
      >
        {this.props.children}
      </NewLayout>
    );
  }
}

export default App;
