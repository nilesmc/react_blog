import React from "react"

export default class CreatePost extends React.Component {

  constructor(props) {
    super(props);
    this.state = { postsArr: this.props.postData.posts};
    this.createPost = this.createPost.bind(this);
  }

  createPost(e) {
    e.preventDefault();
    this.props.addPosts(this.state.postsArr);
  }

  render(){
    return (
      <button
        className='newPost'
        onClick={this.createPost}>
        Make A New Post
      </button>
    );
  }
}
