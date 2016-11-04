import React from "react"
import Link from "./Links";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { postsArr: this.props.postdata.posts};
  }

  updatePosts(newPosts) {
    // re render this posts
    this.setState({ posts: newPosts });
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
        <p>{postObj.text}</p>
        {linksMap}
      </div>
    );
  }
}
