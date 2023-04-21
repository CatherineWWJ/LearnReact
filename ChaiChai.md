React介绍

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
> 注意：语句不等同于表达式

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

