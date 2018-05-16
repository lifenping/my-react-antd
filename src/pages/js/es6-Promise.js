
import React, { Component } from 'react'
import { Button, Modal } from 'antd'

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
                <p>console.dir()的使用：可dump出对象的详细信息</p>
                <p>如：console.dir(Promise)</p>
                <p><Button onClick={this.PromiseFn}>控制台输出Promise对象</Button></p>
                <h3 style={{ paddingTop: '30px' }}>Promise api应用：</h3>
                <p><Button onClick={this.PromiseFn2}>实现Promise对象的小例子，点击后查看控制台</Button></p>
                <p style={{ background: '#f5f5f5', padding: '10px' }}>
                    {`function timeout(ms) {
                    return new Promise((resolve, reject) => {
                    　  setTimeout(resolve, ms, 'done');
                    });
                }
                  
                timeout(100).then((value) => {
                    　console.log(value);
                });`
                    }
                </p>

                {`
                Promise:
                有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。
                如果调用resolve函数和reject函数时带有参数，那么它们的参数会被传递给回调函数。
                reject函数的参数通常是Error对象的实例，表示抛出的错误；resolve函数的参数除了正常的值以外，还可能是另一个 Promise 实例.
                Promise 新建后就会立即执行;
                如下所示：
                `}

                <p style={{ background: '#f5f5f5', padding: '10px' }}>
                    {`let promise = new Promise(function(resolve, reject) {
                　　console.log('Promise');
                　  resolve();
                });
                promise.then(function() {
                　　console.log('resolved.');
                });
                console.log('Hi!');
                依次打印出：
                // Promise
                // Hi!
                // resolved`
                    }
                </p>

                <p>实现异步加载图片的例子：</p>
                <p style={{ background: '#f5f5f5', padding: '10px' }}>
                    {`
                    function loadImageAsync(url) {
                        return new Promise(function(resolve, reject) {
                            const image = new Image();
                    
                            image.onload = function() {
                                resolve(image);
                            };
                    
                            image.onerror = function() {
                                reject(new Error('Could not load image at ' + url));
                            };
                    
                            image.src = url;
                        });
                    }
                `}
                </p>
                <p>Promise.prototype.then()的链式应用</p>
                {`
                then方法是定义在原型对象Promise.prototype上的。
                它的作用是为 Promise 实例添加状态改变时的回调函数，所以then方法返回的是一个新的Promise实例，因此可以采用链式写法，即then方法后面再调用另一个then方法.
                采用链式的then，可以指定一组按照次序调用的回调函数。这时，前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作），这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用。
                
                `}
                <p style={{ background: '#f5f5f5', padding: '10px' }}>
                    {`
                    getJSON("/post/1.json").then(function(post) {
                        return getJSON(post.commentURL);
                      }).then(function funcA(comments) {
                        console.log("resolved: ", comments);
                      }, function funcB(err){
                        console.log("rejected: ", err);
                      });
                      应用箭头函数写法：
                      getJSON("/post/1.json").then(
                        post => getJSON(post.commentURL)
                      ).then(
                        comments => console.log("resolved: ", comments),
                        err => console.log("rejected: ", err)
                      );
                `}
                </p>
                <p>Promise.prototype.catch()的应用</p>
                {`Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
                一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。
                跟传统的try/catch代码块不同的是，如果没有使用catch方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。
                Promise 内部的错误不会影响到 Promise 外部的代码.
                `}
                <p style={{ background: '#f5f5f5', padding: '10px' }}>
                    {`
                    getJSON('/post/1.json').then(function(post) {
                        return getJSON(post.commentURL);
                    }).then(function(comments) {
                        // some code
                    }).catch(function(error) {
                        // 处理前面三个Promise产生的错误
                    });

                    // bad
                    promise
                    .then(function(data) {
                        // success
                    }, function(err) {
                        // error
                    });

                    // good
                    promise
                    .then(function(data) { //cb
                        // success
                    })
                    .catch(function(err) {
                        // error
                    });
                `}
                </p>
                {`
                Promise.all()
                Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
                const p = Promise.all([p1, p2, p3]);
                p的状态由p1、p2、p3决定，分成两种情况。
                （1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
                （2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
                `}

                {`
                Promise.race()
                Promise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。
                const p = Promise.race([p1, p2, p3]);  
                上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。
                `}

                {`
                Promise.try()
                `}
                





            </pre>
        )
    }
}