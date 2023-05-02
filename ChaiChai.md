# React介绍

生态更加庞大

# React特点

1. 声明式UI > 命令式UI（原生dom操作）
2. 组件化
3. 跨平台支持度比较好

# 环境初始化

**工程化环境** > 直接在文件中引入js

> vue脚手架：vue-cli
>
> react脚手架：create-react-app

## 搭建环境

```
npx create-react-app my-react // 使用npx作用：暂时安装create-react-app，搭建好工程环境后删除该包，不占用内存空间
npm start
```

> [npm vs npx](https://blog.csdn.net/qq_45947664/article/details/127856736?ydreferer=aHR0cHM6Ly93d3cuYmFpZHUuY29tL2xpbms%2FdXJsPTRaWS1yRGwzZGFmWGtKaTZ1XzEwV2RNQjBWUTB2T0IySkNKRy11bmZ5eUhsZnc3NU53SHJHR25tbkFicE9sTzZZWEYwWlNtcXRqc3dHa1hCclpxNy1MZkdCQXo5R3ktcTZrTVh5UUtzTldHJndkPSZlcWlkPTkxZmFhNTg2MDAwZjgwZTcwMDAwMDAwNjY0M2FhM2E5)

### 目录介绍

> package.json	项目描述文件（依赖包）
>
> src
>
> ​	App.js
>
> ​	index.js

# JSX基础

> 作用：在react框架中写页面结构：html
>
> 概念：JSX = javascript + XML(HTML)
>
> 优势：html简单 + js可编程能力

开发过程中程序员：声明式写法		BABEL编译后：命令式写法

## JSX中使用js表达式

> 在大括号中写任何合法的js表达式
>
> 注意：语句不等同于表达式			表达式：有值！

## JSX列表渲染

> 技术方案：map 重复渲染的是哪个模板 就return谁
>
> 注意事项：遍历列表时同样需要一个类型为number / string不可重复的key提高diff性能

## JSX条件渲染

> 三元 / &&

## JSX多分支条件渲染（复杂）

> 复杂的多分支的逻辑 收敛为一个函数!!! 通过一个专门的函数来写分支逻辑 模板中只负责调用函数即可

## JSX样式处理

> 1.行内样式 - 在元素身上绑定一个style属性即可
>
> 2.类名样式 - 在元素身上绑定一个className属性即可

## JSX动态类名控制

> 表达式写法

## JSX注意事项

> 幽灵节点：<></>		JSX必须有一个根节点
>
> JSX语法：驼峰命名法
>
> JSX支持换行（多行），如果需要换行，为表示是一个大模板，需使用()包裹

# 开发工具和格式化代码

## 安装提示+格式化插件Prettier - Code formatter

## 实时错误提示工具插件Error Lens

# 组件

> 复用 + 可维护性（独立）

## 函数组件

> 组件的名称必须要首字母大写
>
> 必须要有返回值，即返回UI结构（不渲染就返回null）

## 类组件

> 组件的名称必须要首字母大写（大驼峰）
>
> React.Component：react框架默认提供出来的一个构造函数
>
> 必须要提供一个render方法，方法中存在返回值，即组件的UI结构 

**2中组件的区别：**

函数组件：无状态组件（负责**静态**结构的展示）

类组件：有状态组件 （提供状态，提供**交互**）

# 事件绑定

## 如何绑定

> on + 事件名称 = { 事件处理程序 }
>
> 事件名称采用驼峰命名法，例如：onClick, onMouseEnter, onFocus

## 获取事件对象e

阻止默认行为就可能会需要获取事件对象e

> clientX, clientY：尺寸
>
> target：事件发生的元素

## 触发事件传递自定义参数

> 改造成箭头函数的调用执行方式即可
>
> 1.只需要一个额外参数   {clickHandler} -> {() => clickHandler('自定义的参数')}
>
> 2.既需要e也需要额外的参数    {clickHandler} -> {(e) => clickHandler(e, '自定义的参数')}

# 组件状态

> 目标任务：能够为组件添加状态和修改状态的值
>
> 一个前提：在react hook出来之前，函数式组件是没有自己的状态的，所以后面统一通过类组件来演示
>
> 步骤：初始化状态 -> 读取状态 ->  修改状态 -> 影响试图
>
> 注意：在react中，不可以直接做赋值修改  必须通过一个方法 setState

## this的指向问题

> 使用bind强行修正我们的this指向
>
> 修正this指向方法：使用箭头函数调用的方式  直接沿用父函数(render)中的this指向也是ok的

[显式绑定this的指向：](https://blog.csdn.net/weixin_48524561/article/details/124567266)

1. call
2. apply
3. bind

### 避免this指向问题的解决技巧：

定义箭头函数形式的实例方法              handleClick = () => {   }

## 状态不可变

> state中数据不可以直接赋值修改

**口诀**：不要直接修改状态的值，而是基于当前状态创建新的状态值

# 表单处理

> 受控组件（推荐使用）			非受控组件（了解）

## 受控组件

**受控**：input框自己的状态被react组件状态所控制			双向绑定的底层写法！

**步骤**：

1. 声明用来控制input value的react组件自己的状态
2. 给input框的value属性绑定 react state
3. 给input框绑定一个change事件 为了拿到当前输入框中的数据
4. 拿到input框最新的值 交给state message

## 非受控组件

**非受控**：手动操作dom的方式获取文本框的值

# uuid包

> 每次调用都会生成一个独一无二的id

```
import { v4 as uuid } from 'uuid' // as:重命名
uuid() // 使用
```

# 组件通信

> 默认情况下：组件只能使用自己的数据state
>
> 目标：组件之间数据流转

1. 父子关系：**最重要的！！！**
2. 兄弟关系：自定义事件模式产生技术方法eventBus  /  通过共同的父组件通信
3. 其他关系：**mobx  /  redux  /  基于hook的方案**

## 父传子实现

> 子组件身上绑定属性
>
> 函数式子组件接收参数：props是一个对象 里面存着通过父组件传入的所有数据
>
> 类子组件：必须通过this关键词去获取		this.props.xxx

## props说明

1. 只读
2. 支持传递任意数据，包括函数、JSX

## props解构赋值

```
const {list, person, getMsg, child} = props  // 举例
```

## 子传父实现

> 子组件调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参传入即可

## 兄弟组件通信

> 利用共同的父组件实现兄弟通信

## 跨组件通信Context

> 无需通过中间层，可以由上层组件向任意的下层组件发放数据
>
> *1.导入createContext方法并执行，结构提供者 + 消费者*
>
> ```
> import React,{createContext} from "react";
> const {Provider, Consumer} = createContext()
> ```
>
> *2.使用Provider包裹根组件的模板*
>
> *3.通过Consumer使用数据*
>
> ```
> <Consumer>
> 	{/* 箭头函数的格式固定写法 */}
> 	{value=><span>{value}</span>}
> </Consumer>
> ```

# 组件进阶

## props的children属性

> *只要在子组件标签内写了内容，会默认给到props的children属性*
>
> 可以是函数、JSX等

## [props校验](https://legacy.reactjs.org/docs/typechecking-with-proptypes.html)

> 限定传递数据类型

## props校验-默认值

> 函数组件：
>
> 1.使用defaultProps
>
>  2.函数参数默认值（更推荐）
>
> 类组件：
>
> 1.使用defaultProps
>
> 2.static类静态属性定义（更推荐）

# [生命周期](https://blog.csdn.net/luobo2345/article/details/122818947)

> 只有类组件才有生命周期（类组件需要实例化，而函数组件不需要）

## 挂载阶段

钩子函数执行顺序：

> constructor：初始化时执行一次
>
> render：每次组件渲染时都会触发
>
> componentDidMount：进行ajax请求		类似于vue中的mounted		最重要！！！

## 更新阶段

钩子函数执行顺序：

> render：渲染UI
>
> componentDidUpdate

## 卸载阶段

> componentWillUnmount：组件卸载，执行清理工作

# [组件库antd](https://ant.design/index-cn)

# 包管理器yarn

> react项目中通过npm下载依赖包很容易出现版本冲突的问题！！
>
> yarn包管理器速度更快，安装依赖包不容易出现版本冲突

## 安装下载

```
npm install -g yarn // 安装

yarn --version // 查看版本

// 设置国内源镜像
yarn config set registry https://registry.npm.taobao.org -g
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g

yarn add xxx // 安装依赖包
```

# Hooks

## 概念

> 一套能够使**函数组件**更强大，更灵活的钩子
>
> 钩子：在某一个时机下自动执行
>
> 产生：让函数组件拥有自己的状态

##  useState

> 可以多次使用
>
> 只能出现在函数组件中		状态包括布尔值、数组等
>
> 只能在函数组件的最外层调用		不要在条件语句、内部函数体等内部嵌套使用！

## useEffect

> 为函数组件提供副作用处理
>
> ```
> useEffect(() => {
>     // 定义副作用
>     document.title = count
>   }, [count])
> ```

