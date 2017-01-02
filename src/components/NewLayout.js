import React from "react"
import Header from "./Header";
import Intro from "./Intro";
import Menu from "./Menu";

import '../App.css';

class NewLayout extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    let loadingPage = this.props.pageData.loading
    let layoutContext = this;
    let childrenWithProps = React.Children.map(this.props.children, function(child) {
        return React.cloneElement(child, { pageData: layoutContext.props.pageData, updateAppState: layoutContext.props.updateAppState });
    });

    return (
      <div className="App">
        <div id="outer-container" >
          <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
          <main id="page-wrap">
          <Header headerData={'This is my React Blog'} />
          <Intro introData={'Documenting My ReactJS Journey'} />
          {loadingPage ? (
            <h3> LOADING... </h3>
          ) : (
            <div>{childrenWithProps}</div>
          )}
          </main>
        </div>
      </div>
    );
  }
}

NewLayout.propTypes = {
  pageData: React.PropTypes.object.isRequired,
  updateAppState: React.PropTypes.func.isRequired
}

export default NewLayout;