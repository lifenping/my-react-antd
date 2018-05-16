import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from 'CodeBlock.js'
// import Note from './Note.md'

class item extends Component {
    render() {
        let content = "<span>动态插入的内容</span>"
        return (
            <pre>

                <ReactMarkdown source={"### 插入markdown语法内容测试"} renderers={Object.assign({}, ReactMarkdown.renderers, {
                    CodeBlock: CodeBlock
                })} />

                <br />
                <h3>react服务端渲染</h3>
                {`利于SEO
                加速首屏渲染速度

                `}
                <h3>React中pre标签的使用：</h3>
                {`在react中pre标签内容中的首行空格及空行是会被去除的，这点和在.html文件中应用pre标签是不同的，若想保留空格及空行，可在内容外添加大括号和反引号(可把里面的内容当成文本输出)，具体可查看本页源码。

                `}

                <h3>react中key的应用</h3>
                {`如果你提取出一个ListItem组件，你应该把key保存在数组中的这个<ListItem />元素上，而不是放在ListItem组件中的<li>元素上；
                key会作为给React的提示，但不会传递给你的组件。如果您的组件中需要使用和key相同的值，请将其作为属性传递；
                
                `}

                <h3>React中html转义：</h3>
                <div>{content}</div>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
                {`
                默认插入到dom中的html内容是会被转义的，避免XSS攻击。
                解决办法：
                给标签添加dangerouslySetInnerHTML属性，来输出html代码，
                如：let content = "<span>动态插入的内容</span>"
                <div>{content}</div>  
                // <span>动态插入的内容</span>

                <div dangerouslySetInnerHTML={{ __html: content }}></div>  
                // 动态插入的内容
                
                `}


                {`
                1 验证组件传入的属性是否合理：
                import {PropTypes} from 'react'
                如：
                PropTyppes.propTypes={
                    name:PropTyppes.string.isRequired
                }
                2 state状态：
                是组件内部的属性，组件本身是一个状态机，它可以在constructor中通过this.state直接定义它的值，然后根据这些值来渲染不同的UI

                3 要给每个循环的组件添加一个唯一的key值

                4 无状态函数式组件：stateless functional component
                可把这类组件写成一个纯函数的形式，如：
                function Hoo(props){
                    return <li>{props.aa}</li>
                }
                
                `}

                <h3>生命周期中可使用setState的方法及周期调用次数总结</h3>
                <img src={require('./img/setState.png')} style={{ width: '50%', display: 'block' }} alt="" />

                {`
                flux
                特性：flux为单项数据流

                状态机：
                数学定义是一个计算模型，状态机就是保存你的状态和状态变化的一个盒子,如：
                网页上有一个菜单元素，鼠标悬停的时候，菜单显示；鼠标移开的时候，菜单隐藏。如果使用有限状态机描述，就是这个菜单只有两种状态（显示和隐藏），鼠标会引发状态转变
               
                `}

                <h3>Flux与redux的区别：</h3>
                {`1. action文件不同：
                1）在Flux中，一个Action Creator也是一个函数，但它不会返回一个action，通常会调用dispatch方法；
                2）在Redux中，Action Creator只是返回一个action函数；
                2. stores文件：
                1）Flux中可以有多个store来处理不同类型的数据；
                2）Redux中的store在app.js文件中创建并统一管理，创建时用到reducer，reducer的任务就是定义整个程序的state如何响应；Redux中整个程序的所有数据存储在唯一一个Object中；
                
                `}
            </pre>
        );
    }
}

export default item;