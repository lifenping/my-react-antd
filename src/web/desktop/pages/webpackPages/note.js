
import React, { Component } from 'react'

class reactRouter extends React.Component {
    render() {
        return (
            <div>
                <pre>
<h3>webpack应用总结</h3>
{`
1 在webpack中一切皆资源，loader 转换器可以将各种类型的资源转换成 JavaScript 模块，故可用以下方式来展示图片：
import imgLife from './images/life.png'
<img src={imgLife} />
或者在css文件中用background-image来实现
注：webpack中要配置file-loader


`}





                </pre>
            </div>
        );
    }
}
export default reactRouter;

