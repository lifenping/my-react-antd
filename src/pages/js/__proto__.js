
import React, { Component } from 'react'
import { Button, Modal } from 'antd'
import style from '../index.less'

export default class item extends Component {
    render() {
        return (
            <pre>
            <h3>原型对象</h3>
            {`
            当我们创建好一个函数时，也会自动为这个函数创建一个prototype属性，这个属性指向了一个对象，而这个对象就是原型对象。原型对象中包含了特定类型（就是我们创建的引用类型）的所有实例所共享的属性和方法。
            `}
            <h3>原型</h3>
            {`
            在Javascript中，每个函数都有一个原型属性prototype指向函数自身的原型，而由这个函数创建的对象也有一个__proto__属性指向这个原型，而函数的原型是一个对象，所以这个对象也会有一个__proto__指向自己的原型，这样逐层深入直到Object对象的原型(null)，这样就形成了原型链。
            `}
            <img src={require('./img/prototype-lauout.jpg')} alt=""/>
            {`
            prototype: 在函数身上，指向原型对象
            __proto__: 在对象身上（包括函数创建的对象, 函数本身和原型对象），指向自身的原型
            constructor: 在原型对象上，指向构造函数, 在多级继承的时候，指明构造函数方便在对象上扩展原型属性
            Object.__protp__为null: 原型的顶端
            `}
            <h3>原型的作用</h3>
            {`
            最主要的一点是数据共享，创建对象的时候，我们会把公共的方法和属性挂载到原型上，避免资源浪费。
            `}
            <h3>原型链</h3>
            {`
            原型对象也有自己的原型，直到对象的原型为 null 为止（也就是没有原型）。这种一级一级的链结构就称为原型链。原型继承的模型就是JavaScript实现继承的原理。真正形成原型链的是每个对象的__proto__属性，而不是函数的prototype属性，这是很重要的。
            `}
            <h3>重写原型方法</h3>
            {`
            在使用第三方JS类库的时候，往往有时候他们定义的原型方法是不能满足我们的需要，但是又离不开这个类库，所以这时候我们就需要重写他们的原型中的一个或者多个属性或function，我们可以通过继续声明的同样的add代码的形式来达到覆盖重写前面的add功能，代码如下：
            Calculator.prototype.add = function (x, y) {
                return x + y + this.tax;
            };
            
            `}
            <h3>参考：</h3>
            <div>
            <a href="https://leohxj.gitbooks.io/front-end-database/javascript-basic/prototypal-inheritance.html">https://leohxj.gitbooks.io/front-end-database/javascript-basic/prototypal-inheritance.html</a>
            </div>
            








            </pre>
        )
    }
}