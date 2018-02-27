import React from "react"
import Link from "./Links";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.stopEditing = this.stopEditing.bind(this);
  }

  updatePosts(newPosts) {
    this.setState({ posts: newPosts });
  }

  stopEditing(e){
    e.preventDefault();
    let post = this.props.postData;
    post.editing = true;
    this.props.updatePosts(post, this.props.position);
  }

  render(){
    var postObj = this.props.postData;
    let linksObj = postObj.links;

    const linksMap = linksObj.map((post, idx) => {
      return (<Link key={idx} linkdata={linksObj[idx]}/>);
    })
    return (
      <div className={`App-section ${ postObj.editing ? 'editing' : ''} `}>
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

Post.propTypes = {
  position: React.PropTypes.number.isRequired,
  postData: React.PropTypes.object.isRequired,
  updatePosts: React.PropTypes.func.isRequired
}

export default Post;
