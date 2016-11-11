import React from "react"
import Header from "./Header";
import Intro from "./Intro";
import Post from "./Post";
import CreatePost from "./CreatePost";
import PostForm from "./PostForm";

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
    let postsArr = this.state.posts;
    postsArr.push(newPost);
    this.setState ({ posts: postsArr } );
  }

  updatePosts(updatedPost, index) {
    let currentPosts = this.state.posts;
    currentPosts[index] = updatedPost;
    this.setState(currentPosts);
  }

  render(){
    let postsObjs = this.state.posts;
    let updatePosts = this.updatePosts;
    const postsMap = postsObjs.map((post, idx) => {
      return (<Post key={idx} position={idx} postdata={postsObjs[idx]}/>)
    });

    const postFormsMap = postsObjs.map((post, idx) => {
      return (<PostForm key={idx} position={idx} postdata={postsObjs[idx]} updatePosts={updatePosts} />)
    });

    return (
      <div>
        <Header headerdata={this.props.pagedata.header_title} />
        <Intro introdata={this.props.pagedata.intro} />
        <CreatePost postdata={this.props.pagedata} addPosts={this.addPosts} />
        {postsMap}
        {postFormsMap}
      </div>
    );
  }
}
