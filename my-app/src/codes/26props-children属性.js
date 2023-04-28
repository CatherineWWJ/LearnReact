import React from "react";

function ListItem(props) {
  // 只要在子组件标签内写了内容，会默认给到props的children属性
  console.log(props.children); // react-element元素
  return (
    <div>
      ListItem
      {props.children}
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <div>
        <ListItem>
          <h3>wwj</h3>
          <div>czy</div>
        </ListItem>
      </div>
    )
  }
}

export default App;