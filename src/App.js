import React, { Component } from 'react';
import Layout from "./components/Layout";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      header_title: 'This Is My First React Blog',
      intro: 'Documenting My React Journey',
      posts: [
        {
          subject: 'This Is My First Week Blog Post',
          text: 'Our first week we checked out this material',
          links: [
                  { link: 'https://www.ft.com', link_text: 'This is the first weeks story' },
                  { link: 'https://www.ft.com', link_text: 'This is the second first weeks story'},
                  { link: 'https://www.ft.com', link_text: 'This is the third first weeks story'}
          ]
        },
        {
          subject: 'This Is My Second Week Blog Post',
          text: 'Our second week we checked out this material',
          links: [
                  { link: 'https://www.ft.com', link_text: 'This is the second weeks story' },
                  { link: 'https://www.ft.com', link_text: 'This is the second second weeks story'},
                  { link: 'https://www.ft.com', link_text: 'This is the third second weeks story'}
          ]
        },
        {
          subject: 'This Is My Third Week Blog Post',
          text: 'Our third week we checked out this material',
          links: [
                  { link: 'https://www.ft.com', link_text: 'This is the third weeks story' },
                  { link: 'https://www.ft.com', link_text: 'This is the second third weeks story'},
                  { link: 'https://www.ft.com', link_text: 'This is the third third weeks story'}
          ]
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Layout pagedata={this.state} />
      </div>
    );
  }
}

export default App;
