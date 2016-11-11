import React from "react"
import Link from "./Links";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { postsArr: this.props.postdata.posts};
    this.stopEditing = this.stopEditing.bind(this);
  }

  updatePosts(newPosts) {
    // re render this posts
    this.setState({ posts: newPosts });
  }

  stopEditing(e){
    e.preventDefault();
    let post = this.props.postdata;
    post.editing = true;
    this.props.updatePosts(post, this.props.position);
  }

  render(){
    var postObj = this.props.postdata;
    let linksObj = postObj.links;
    const linksMap = linksObj.map((post, idx) => {
      return (<Link key={idx} linkdata={linksObj[idx]}/>);
    })
    return (
      <div className="App-section">
        <h3>{postObj.subject}</h3>
        <button
          onClick={this.stopEditing}
          className='updatePost'>
          Edit Post
        </button>
        <p>{postObj.text}</p>
        {linksMap}
      </div>
    );
  }
}
