
import React, { Component } from 'react'
import { Button, Modal } from 'antd'
import style from '../index.less'

export default class item extends Component {
    render() {
        return (
            <pre>
            <h3>全局this</h3>
            浏览器宿主的全局环境中，this指的是window对象。
            <h3>函数或方法里的this</h3>
            {`
            有个例外，就是使用了"use strict";此时this是undefined
            当用调用函数时使用了new关键字，此刻this指代一个新的上下文，不再指向全局this,通常我将这个新的上下文称作实例
            `}
            ...
            <h3>参考：</h3>
            <div>
                <a href="https://leohxj.gitbooks.io/front-end-database/javascript-basic/all-this.html">https://leohxj.gitbooks.io/front-end-database/javascript-basic/all-this.html</a>
            </div>
            </pre>
        )
    }
}