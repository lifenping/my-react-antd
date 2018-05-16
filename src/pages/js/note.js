
import React, { Component } from 'react'
import { Button, Modal } from 'antd'
import style from '../index.less'

export default class item extends Component {
    objectClick = () => {
        const a = [{ "aa": 1 }, { "bb": 2 }, { "cc": 7 }];
        const b = [{ "aa": 5 }, { "bb": 2 }];
        console.log(Object.assign(a, b))
    }
    PromiseFn = () => {
        console.dir(Promise)
    }

    // 实现Promise对象的小例子，点击后查看控制台
    PromiseFn2 = () => {
        function timeout(ms) {
            return new Promise((resolve, reject) => {
                setTimeout(resolve, ms, 'done');
            });
        }

        timeout(100).then((value) => {
            console.log(value);
        });
    }

    render() {

        return (
            <pre>
                <h3>JavaScript的加载与执行</h3>
                {`
                浏览的渲染线程和JS执行线程是互斥的，并且JavaScript默认是阻塞加载的。页面的下载和渲染都必须停下来等待脚本执行完成。JavaScript 执行过程耗时越久，浏览器等待响应用户输入的时间就越长。
                
                `}
                <h3>加载</h3>
                {`
                不管是script标签直接引入的情况，还是src加载的外部资源，都会阻塞页面的渲染。所以一般我们为了从体验上考虑，会将JS文件放置在body标签闭合之前。好消息是:从 IE 8、Firefox 3.5、Safari 4 和 Chrome 2 开始都允许并行下载 JavaScript 文件。但是只是JS文件可以并行下载，渲染还是被阻塞的, 页面仍然必须等待所有 JavaScript 代码下载并执行完成才能继续。
                
                `}
                <h3>单线程的Javascript</h3>
                {`
                浏览器的内核是多线程的，它们在内核制控下相互配合以保持同步，一个浏览器至少实现三个常驻线程：

                javascript引擎线程 javascript引擎是基于事件驱动单线程执行的，JS引擎一直等待着任务队列中任务的到来，然后加以处理，浏览器无论什么时候都只有一个JS线程在运行JS程序。
                GUI渲染线程 GUI渲染线程负责渲染浏览器界面，当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时,该线程就会执行。但需要注意GUI渲染线程与JS引擎是互斥的，当JS引擎执行时GUI线程会被挂起，GUI更新会被保存在一个队列中等到JS引擎空闲时立即被执行。
                浏览器事件触发线程 事件触发线程，当一个事件被触发时该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理。这些事件可来自JavaScript引擎当前执行的代码块如setTimeOut、也可来自浏览器内核的其他线程如鼠标点击、AJAX异步请求等，但由于JS的单线程关系所有这些事件都得排队等待JS引擎处理。（当线程中没有执行任何同步代码的前提下才会执行异步代码）

                下面的代码，当while执行时候，setTimeout永远不会执行，用来说明js是单线程的
                var isEnd = true;
                window.setTimeout(function () {
                    isEnd = false;//1s后，改变isEnd的值
                }, 1000);
                //这个while永远的占用了js线程，所以setTimeout里面的函数永远不会执行
                while (isEnd);
                //alert也永远不会弹出
                alert('end');
                `}
                <h3>Object.assign应用：</h3>
                <div><Button onClick={this.objectClick}>Object.assign()，查看控制台</Button></div>
                {`Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
                如果assign里的参数是数组，则以数组下标为key，来覆盖前面的数组下标对应的key

                `}
                <h3>es6 Set</h3>
                <div><Button onClick={() => console.dir(Set)}>Set对象，查看控制台</Button></div>
                {`ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
                Set 本身是一个构造函数，用来生成 Set 数据结构。
                
                `}
                <div className={style.code}>
                    {`const s = new Set();
                [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
                for (let i of s) {
                console.log(i);
                }
                // 2 3 5 4`}
                </div>

                {`// 去除数组的重复成员，可用以下方法:
                [...new Set(array)]
                还可用：
                Array.from方法可以将 Set 结构转为数组。
                
                在 Set 内部，两个NaN是相等。
                另外，两个对象总是不相等的。

                add(value)：添加某个值，返回 Set 结构本身。
                delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
                has(value)：返回一个布尔值，表示该值是否为Set的成员。
                clear()：清除所有成员，没有返回值。

                keys()：返回键名的遍历器
                values()：返回键值的遍历器
                entries()：返回键值对的遍历器
                forEach()：使用回调函数遍历每个成员

                `}

                <h3>es6 Map</h3>
                <div><Button onClick={() => console.dir(Map)}>Map对象，查看控制台</Button></div>
                {`Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适
               
                Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
                这就解决了同名属性碰撞（clash）的问题，我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。
                如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，
                比如0和-0就是一个键，布尔值true和字符串true则是两个不同的键。另外，undefined和null也是两个不同的键。虽然NaN不严格相等于自身，但 Map 将其视为同一个键。
                set方法返回的是当前的Map对象，因此可以采用链式写法
               
                Map: 遍历方法
                keys()：返回键名的遍历器。
                values()：返回键值的遍历器。
                entries()：返回所有成员的遍历器。
                forEach()：遍历 Map 的所有成员。

                Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）:
                [...map.keys()]  // [1, 2, 3]

                结合数组的map方法、filter方法，可以实现 Map 的遍历和过滤

                `}
                <h3>与其他数据结构的互相转换</h3>
                {`
                Map 转为数组
                数组 转为 Map
                Map 转为对象
                对象转为 Map
                Map 转为 JSON
                JSON 转为 Map
                `}
                <h3>创建Promise对象</h3>
                {`
                最基本的情况，是使用new Promise()来创建Promise对象。也可以使用Promise.resolve(value)代替new Promise()快捷方法。比如:
                Promise.resolve(42);
                // 等价于
                new Promise(function(resolve) {
                    reslove(42);
                })
                `}
                <h3>Promise.reject</h3>
                <p>Promise.reject(error)是和 Promise.resolve(value) 类似的静态方法，是 new Promise() 方法的快捷方式。</p>
                {`
                Promise.reject(new Error("出错了"));
                // 等价于
                new Promise(function(resolve,reject){
                    reject(new Error("出错了"));
                });
                `}
                <h3>SPA-单页面SEO解决方案</h3>
                {`
                单页应用实际是把视图（View）渲染从Server交给浏览器，Server只提供JSON格式数据，视图和内容都是通过本地JavaScript来组织和渲染。而搜索搜索引擎抓取的内容，需要有完整的HTML和内容，单页应用架构的站点，并不能很好的支持搜索。
                `}
                <h3>SPA-路由与状态的管理</h3>
                {`
                传统的页面型产品是不存在这个问题的，因为它就是以页面为单位的，也有的时候，服务端路由处理了这一切。但是在单页应用中，这成为了问题，因为我们只有一个页面，界面上的各种功能区块是动态生成的。所以我们要通过对路由的管理，来实现这样的功能。

                #号在浏览器的URL中是一个锚点，在当前页改变#号的参数，页面会跳转到锚点所在的位置，通过JavaScript我们可以获取到#号后的参数, 改变#号后的参数，页面并不会重载，于是大多数的单页架构网站，都在URL中采用#号来作为当前视图的URL地址。
                `}









            </pre>
        )
    }
}