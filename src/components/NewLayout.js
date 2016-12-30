import React from "react"
import Header from "./Header";
import Intro from "./Intro";
import Menu from "./Menu";

class NewLayout extends React.Component {

  constructor(props) {
    debugger
    super(props);
  }

  render(){
    debugger

    return (
      <div className="App">
        <div id="outer-container" >
          <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
          <main id="page-wrap">
          <Header headerData={'This is my React Blog'} />
          <Intro introData={'Documenting My ReactJS Journey'} />
          </main>
        </div>
      </div>
    );
  }
}

NewLayout.propTypes = {
  pageData: React.PropTypes.object.isRequired
}

export default NewLayout;