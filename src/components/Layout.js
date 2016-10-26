import React from "react"
import Header from "./Header";
import Intro from "./Intro";
import Week from "./Week";

export default class Layout extends React.Component {
  render(){
    let postsObjs = this.props.pagedata.posts
    const postsMap = postsObjs.map((post, idx) => {
      return (<Week key={idx} postdata={postsObjs[idx]}/>)
    })

    return (
      <div>
        <Header headerdata={this.props.pagedata.header_title} />
        <Intro introdata={this.props.pagedata.intro} />
        {postsMap}
      </div>
    );
  }
}
