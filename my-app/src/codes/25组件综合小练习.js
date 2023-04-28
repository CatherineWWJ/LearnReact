import React from "react";

// 渲染列表
function ListItem(props) {
  const {name, age, id} = props.info
  return (
    <div>
      <h3>{name}</h3>
      <p>{age}</p>
      <button onClick={()=>props.delMan(id)}>删除</button>
    </div>
  )
}

// 数据提供者 App -> ListItem
class App extends React.Component {
  state = {
    list:[
      {id:1,name:'wwj',age:18},
      {id:2,name:'czy',age:20},
      {id:3,name:'xwj',age:18},
    ]
  }
  // 给子组件传递的函数
  delMan = (id)=>{
    this.setState({
      list:this.state.list.filter(item=>item.id !== id)
    })
  }
  render() {
    return (
      <div>
        {this.state.list.map(item=>{
          return (
            // 注意：可以在自定义组件上直接加key
            <ListItem info={item} delMan={this.delMan} key={item.id}></ListItem>
          )
        })}
      </div>
    )
  }
}

export default App;