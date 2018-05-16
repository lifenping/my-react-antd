
import React, { Component } from 'react'
import { Button, Modal } from 'antd'

export default class item extends Component {
    objectClick = () => {
        const a = [{ "aa": 1 }, { "bb": 2 }, { "cc": 7 }];
        const b = [{ "aa": 5 }, { "bb": 2 }];
        console.log(Object.assign(a, b))
    }
    render() {

        return (
            <pre>
                <h3>es6-Symbol应用</h3>
                <div><Button onClick={()=>console.dir(Symbol)}>Symbol对象，查看控制台</Button></div>
                {`ES5 的对象属性名都是字符串，这容易造成属性名的冲突。
                ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。
                它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）
                `}
                <div style={{background:'#f5f5f5',padding:'10px'}}>
                {`let s = Symbol();
                typeof s
                // "symbol"`}
                </div>
                {`
                注意，Symbol函数前不能使用new命令，否则会报错。
                这是因为生成的 Symbol 是一个原始类型的值，不是对象。也就是说，由于 Symbol 值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。

                Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分
                `}

                <div style={{background:'#f5f5f5',padding:'10px'}}>
                {`let s1 = Symbol('foo');
                let s2 = Symbol('bar');

                s1 // Symbol(foo)
                s2 // Symbol(bar)`}
                </div>
                {`Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的
                Symbol 值不能与其他类型的值进行运算，会报错。
                
                但是，Symbol 值可以显式转为字符串:
                let sym = Symbol('My symbol');
                String(sym) // 'Symbol(My symbol)'
                sym.toString() // 'Symbol(My symbol)'

                Symbol 值也可以转为布尔值，但是不能转为数值,即可应用Boolean(),而不能应用Number()
                
                `}
                <h3>Symbol作为属性名的应用</h3>
                {`let mySymbol = Symbol();
                // 第一种写法
                let a = {};
                a[mySymbol] = 'Hello!';
                // 第二种写法
                let a = {
                [mySymbol]: 'Hello!'
                };
                // 第三种写法
                let a = {};
                Object.defineProperty(a, mySymbol, { value: 'Hello!' });
                // 以上写法都得到同样结果
                a[mySymbol] // "Hello!"
                注：不能应用点的写法：a.mySymbol = 'Hello!';因为点后跟的都是string,此时a[mySymbol]打印出undefined。

                `}

                <h3>属性名的遍历</h3>
                {`Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
                但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名。
                Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
                
                另一个新的 API，Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。

                `}
                <h3>Symbol.for()，Symbol.keyFor()</h3>
                {`有时，我们希望重新使用同一个 Symbol 值，Symbol.for方法可以做到这一点。
                它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。
                `}
                <div style={{background:'#f5f5f5',padding:'10px'}}>
                {`let s1 = Symbol.for('foo');
                let s2 = Symbol.for('foo');

                s1 === s2 // true`}
                </div>

                {`Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key。`}
                <div style={{background:'#f5f5f5',padding:'10px'}}>
                {`let s1 = Symbol.for("foo");
                Symbol.keyFor(s1) // "foo"

                let s2 = Symbol("foo");
                Symbol.keyFor(s2) // undefined`}
                </div>

                {`需要注意的是，Symbol.for为 Symbol 值登记的名字，是全局环境的，可以在不同的 iframe 或 service worker 中取到同一个值。`}
                <div style={{background:'#f5f5f5',padding:'10px'}}>
                {`iframe = document.createElement('iframe');
                iframe.src = String(window.location);
                document.body.appendChild(iframe);

                iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo')
                // true
                
                `}
                </div>

                <h3>实例：模块的 Singleton 模式</h3>
                {`Singleton 模式指的是调用一个类，任何时候返回的都是同一个实例。
                对于 Node 来说，模块文件可以看成是一个类。怎么保证每次执行这个模块文件，返回的都是同一个实例呢？
                很容易想到，可以把实例放到顶层对象global，但是，这里有一个问题，全局变量global._foo是可写的，任何文件都可以修改。
                为了防止这种情况出现，我们就可以使用 Symbol，具体查看es6文档
                
                `}
                <h3>{`Symbol.hasInstance
                Symbol.isConcatSpreadable
                ...
                
                `} </h3>
                
                





            </pre>
        )
    }
}