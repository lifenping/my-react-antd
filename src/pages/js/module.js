
import React, { Component } from 'react'
import { Button, Modal } from 'antd'
import style from '../index.less'

export default class item extends Component {
    render() {
        return (
            <pre>
            <h3>对象写法</h3>
            <p>外部可以通过定义的变量名访问，起到了一点点的命名空间作用，但是同样缺点明显: 会暴露所有模块成员，内部状态可以被外部改写。比如，外部代码可以直接改变内_count的值。</p>
            {`
            var module2 = {
                _count: 0,
                m1 : function (){
            　　　　　　//...
            　　　　},
            　　m2 : function (){
            　　　　//...
            　　}
            }
            `}
           <h3>立刻执行函数(Immediately-Invoked Function Expression，IIFE) or 匿名闭包</h3>
           {`
           var module1 = (function(){
            　　　　var _count = 0;
            　　　　var m1 = function(){
            　　　　　　//...
            　　　　};
            　　　　var m2 = function(){
            　　　　　　//...
            　　　　};
            　　　　return {
            　　　　　　m1 : m1,
            　　　　　　m2 : m2
            　　　　};
            　　})();
           `}
           <p>这样可以很好的保护私有变量_count，通过return来设置公开的方法。缺点也有: 动态添加方法的时候比较麻烦，且无法修改内部私有变量.</p>
           <h3>构造函数</h3>
           <p>每次用的时候都要new一下，也就是说每个实例在内存里都是一份copy</p>
           <p>......</p>
           <h3>参考</h3>
           <p><a href="https://leohxj.gitbooks.io/front-end-database/javascript-modules/modules-intro.html">https://leohxj.gitbooks.io/front-end-database/javascript-modules/modules-intro.html</a></p>
            </pre>
        )
    }
}