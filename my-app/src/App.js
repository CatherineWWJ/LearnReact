import React from "react";

function SonA (props) {
  return (
    <div>this is SonA</div>
  )
}

function SonB (props) {
  return (
    <div>this is SonB</div>
  )
}

class App extends React.Component {
  state = {
    list: [1,2,3]
  }
  render() {
    return (
      <div>
        <SonA></SonA>
        <SonB></SonB>
      </div>
    )
  }
}

export default App;