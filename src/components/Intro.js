import React from "react"

const Intro = ({introData}) => (
  <p className="App-intro">{introData}</p>
)

Intro.propTypes = {
  introData: React.PropTypes.string.isRequired
}

export default Intro
