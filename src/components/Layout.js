import React from "react"
import Header from "./Header";
import Intro from "./Intro";
import Week from "./Week";

export default class Layout extends React.Component {
  render(){
    let posts = [];
    let postsObjs = this.props.pagedata.posts;
    for (let i = 0; i < postsObjs.length; i++) {
      posts.push(<Week postdata={postsObjs[i]}/>)
    };

    return (
      <div>
        <Header headerdata={this.props.pagedata.header_title}/>
        <Intro introdata={this.props.pagedata.intro}/>
        {posts}
      </div>
    );
  }
}
