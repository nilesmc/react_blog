import React, { Component } from 'react';
import Layout from "./components/Layout";
import Rebase from 're-base';
import './App.css';

// Initialize Firebase
var base = Rebase.createClass({
  apiKey: "AIzaSyDFRaMj8UvCZ8gfhmmPHad7-ZhvgJEQsSw",
  authDomain: "react-blog-b8999.firebaseapp.com",
  databaseURL: "https://react-blog-b8999.firebaseio.com",
  storageBucket: "react-blog-b8999.appspot.com",
  messagingSenderId: "536425260340"
});
// firebase.initializeApp(config);

class App extends Component {
  constructor(){
    super();
    this.state = {
      header_title: 'This Is My First React Blog',
      intro: 'Documenting My ReactJS Journey',
      posts: [
        {
          subject: 'Week 1 - Learning about ES6',
          editing: false,
          text: 'Our first week we mainly checked out materials related to ES6, and started the JS Assesment',
          links: [
            {
              link_text: 'JavaScript Assessment',
              link: 'https://github.com/rmurphey/js-assessment'
            },
            {
              link_text: 'DevDocs, offline version',
              link: 'http://devdocs.io/offline'
            },
            {
              link_text: 'FunFunFunctions: Higher Order Functions',
              link: 'https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84'
            },
            {
              link_text: 'FunFunFunctions: ES6/2015 var, let, and const',
              link: 'https://www.youtube.com/watch?v=sjyJBL5fkp8'
            },
            {
              link_text: 'FunFunFunctions: ES6/2015 arrow functions',
              link: 'https://www.youtube.com/watch?v=6sQDTgOqh-I'
            },
            {
              link_text: 'Industry Talk: Women in tech',
              link: 'http://tech.co/dc-is-the-top-city-for-women-in-tech-2016-02'
            },
            {
              link_text: "JavaScript': Understanding the Weird Parts",
              link: 'https://www.udemy.com/understand-javascript/?couponCode=OCT1202&siteID=Kzz30XxWgII-loSkKDchAkcHj_nnwiIBHQ&LSNPUBID=Kzz30XxWgII'
            },
            {
              link_text: 'ES6 at a glance',
              link: 'http://es6-features.org/'
            },
            {
              link_text: 'Essential ES6 / ES2015 JavaScript',
              link: 'https://www.youtube.com/watch?v=CozSF5abcTA'
            },
            {
              link_text: 'Javascript ES6 Cheatsheet - the best of JS ES6',
              link: 'https://www.youtube.com/watch?v=AfWYO8t7ed4'
            }
          ]
        },
        {
          subject: 'Week 2 - Implementing ES6',
          editing: false,
          text: 'Our second week we worked on using ES6',
          links: [
            {
              link_text: 'My JS Assessment',
              link: 'https://github.com/nilesvm/js-assessment'
            },
            {
              link_text: 'AirBnb Styleguide',
              link: 'https://github.com/airbnb/javascript'
            },
            {
              link_text: 'Learn ES6 (ECMAScript 2015) - Course by @johnlindquist',
              link: 'https://egghead.io/courses/learn-es6-ecmascript-2015'
            },
            {
              link_text: 'Learn Four Semesters of Computer Science in 5 Hours w/ Brian Holt',
              link: 'https://frontendmasters.com/courses/computer-science/'
            },
            {
              link_text: 'Git Intro',
              link: 'http://www-cs-students.stanford.edu/~blynn/gitmagic/'
            },
            {
              link_text: 'Sublime Text Power User Book by Wes Bos',
              link: 'https://sublimetextbook.com/'
            },
            {
              link_text: 'Atom keyboard shortcuts',
              link: 'http://www.ft.com'
            },
          ]
        },
        {
          subject: 'Week 3 - Diving into React, and Starting a React Blog',
          editing: false,
          text: 'Our third week we checked out this material',
          links: [
            {
              link_text: 'Thinking in React',
              link: 'https://facebook.github.io/react/docs/thinking-in-react.html'
            },
            {
              link_text: 'REACT JS TUTORIAL #2 - Reactjs Components & Rendering',
              link: 'https://www.youtube.com/watch?v=fd2Cayhez58&feature=youtu.be'
            },
            {
              link_text: 'REACT JS TUTORIAL #3 - Composing Multiple React.js Components',
              link: 'https://www.youtube.com/watch?v=vu_rIMPROoQ'
            },
            {
              link_text: 'REACT JS TUTORIAL #4 - State vs Props & Application Data',
              link: 'https://www.youtube.com/watch?v=qh3dYM6Keuw&t=79s'
            },
            {
              link_text: 'React on ES6+',
              link: 'https://babeljs.io/blog/2015/06/07/react-on-es6-plus'
            },
            {
              link_text: 'Learn ES2015 Babel',
              link: 'https://babeljs.io/docs/learn-es2015/'
            },
            {
              link_text: 'Our First 50,000 Stars - React Blog (History of React)',
              link: 'https://facebook.github.io/react/blog/2016/09/28/our-first-50000-stars.html'
            },
            {
              link_text: 'Ashley Williams: If you wish to learn ES6/2015 from scratch, you must first invent the universe',
              link: 'https://youtu.be/DN4yLZB1vUQ'
            },
            {
              link_text: 'React Developer Tools (for Chrome)',
              link: 'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi'
            },
            {
              link_text: 'Understanding JavaScript’s Function.prototype.bind – Smashing Magazine',
              link: 'https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/'
            },
          ]
        },
        {
          subject: 'Week 4 - Diving into React Further, and Starting a React Blog',
          editing: false,
          text: 'Our fifth week we checked out this material on forms, and data binding.',
          links: [
            {
              link_text: 'My React Blog Repo',
              link: 'https://github.com/nilesvm/react_blog'
            },
            {
              link_text: 'Create React App - Boilerplate',
              link: 'https://github.com/facebookincubator/create-react-app'
            },
            {
              link_text: 'Create React App - Boilerplate',
              link: 'http://newsletter.fullstackreact.com/'
            },
            {
              link_text: '8 no-Flux strategies for React component communication',
              link: 'http://andrewhfarmer.com/component-communication/'
            },
            {
              link_text: '8 no-Flux strategies for React component communication',
              link: 'https://www.youtube.com/watch?v=_D1JGNidMr4&feature=youtu.be'
            },
            {
              link_text: 'ReactJS Basics - #7 Events & ReactJS',
              link: 'https://www.youtube.com/watch?v=OcM__8q6p4c&index=8'
            },
            {
              link_text: 'ReactJS Basics - #8 State of Components',
              link: 'https://www.youtube.com/watch?v=e5n9j9n83OM'
            },
            {
              link_text: 'ReactJS Basics - #9 How does ReactJS update the DOM?',
              link: 'https://www.youtube.com/watch?v=Iw2BLUjQo1E'
            },
            {
              link_text: 'ReactJS Basics - #10 Stateless Components',
              link: 'https://www.youtube.com/watch?v=SEkfzqIgvTo'
            },
            {
              link_text: 'Handling Events - React',
              link: 'https://facebook.github.io/react/docs/handling-events.html'
            },
            {
              link_text: 'React Stateless Functional Components: Nine Wins You Might Have Overlooked',
              link: 'https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.jblm2w9dp'
            }
          ]
        },
        {
          subject: 'Week 5 - Forms and Inputs',
          editing: false,
          text: 'Our fifth week we checked out this material on forms, and data binding.',
          links: [
            {
              link_text: 'Forms: Controlled and Uncontrolled Inputs',
              link: 'https://facebook.github.io/react/docs/forms.html#uncontrolled-components'
            },
            {
              link_text: 'A React Markdown Editor',
              link: 'https://www.npmjs.com/package/react-markdown-editor'
            },
            {
              link_text: 'React For Everyone #13 - Controlled Inputs',
              link: 'https://www.youtube.com/watch?v=BvtQMxekmH0'
            },
            {
              link_text: 'Javascript Fatigue w React',
              link: 'https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.yx99fphuj'
            },
            {
              link_text: 'Javascript for Millennials image',
              link: 'https://pbs.twimg.com/media/CE-rBtIXIAEw9V2.jpg'
            }
          ]
        },
        {
          subject: 'Week 6 - Lifecycle Methods',
          editing: false,
          text: 'Our 6th week we checked out documents related to lifecycle methods, and started to work on our project individually. I had completed the basic specs for the blog app. I found it useful to pair with other people to help them work on their apps. It cemented my learning. Teaching others is a great way to learn.',
          links: [
            {
              link_text: 'React Component Lifecycle',
              link: 'https://facebook.github.io/react/docs/react-component.html'
            },
            {
              link_text: 'Adding Lifecycle Methods to a class',
              link: 'https://facebook.github.io/react/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class'
            },
            {
              link_text: 'ReactJS Bascics - Component Lifecycle',
              link: 'https://www.youtube.com/watch?v=Oioo0IdoEls'
            },
            {
              link_text: 'Why is it so hard to make websites for the government',
              link: 'http://www.nytimes.com/interactive/2016/11/13/magazine/design-issue-code-for-america.html'
            },
            {
              link_text: 'What are typical use cases for React lifecycle methods like componentWillReceiveProps',
              link: 'http://stackoverflow.com/questions/38929991/what-are-typical-use-cases-for-react-lifecycle-methods-like-componentwillreceive'
            }
          ]
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Layout pageData={this.state} />
      </div>
    );
  }
}

export default App;
