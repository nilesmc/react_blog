import React from "react"
import Header from "./Header";
import Intro from "./Intro";
import Post from "./Post";
import MakePost from "./MakePost";

export default class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = { posts: this.props.pagedata.posts }
    this.updatePosts = this.updatePosts.bind(this);
    this.addPosts = this.addPosts.bind(this);
  }

  addPosts(){
    let newPost = {
      subject: 'New Entry',
      text: '',
      links: [ { link: '', link_text: '' }, { link: '', link_text: '' }, { link: '', link_text: '' } ]
    };
    // debugger
    let postsArr = this.state.posts;
    postsArr.push(newPost);
    this.setState( { posts: postsArr } );
    // debugger
  }

  updatePosts(newPosts) {
    // re render this posts
    this.setState({ posts: newPosts });
  }

  render(){
    // debugger
    let postsObjs = this.state.posts;
    console.log(postsObjs);
    const postsMap = postsObjs.map((post, idx) => {
      return (<Post key={idx} postdata={postsObjs[idx]}/>)
    })

    return (
      <div>
        <Header headerdata={this.props.pagedata.header_title} />
        <Intro introdata={this.props.pagedata.intro} />
        <MakePost postdata={this.props.pagedata} addPosts={this.addPosts} />
        {postsMap}
      </div>
    );
  }
}
