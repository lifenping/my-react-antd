
import React, { Component } from 'react'

class reactRouter extends React.Component {
    render() {
        return (
            <div>
                <pre>
                    <h3>webpack应用总结</h3>
                    {`
一、 在webpack中一切皆资源，loader 转换器可以将各种类型的资源转换成 JavaScript 模块，故可用以下方式来展示图片：
1 通过 img 标签实现：
import imgLife from './images/life.png'  //es6方式引入
<img src={imgLife} />  
或 <img src={require('./images/life.png')} />   //conmmon.js方式引入
2 在css文件中用background-image来实现
注：webpack中要配置file-loader

二、 eslint 插件的使用：
1 安装eslint,eslint-loader（webpack服务需要，告知使用eslint检测）
2 在webpack.config.js中指定 哪些文件需要应用 eslint-loader 
3 目录根目录下添加.eslintrc文件，里面写上检测规则或在webpack.config.js中添加匹配配置（由于内容较多，最好放到.eslintrc文件中）

另外已有开源的eslint配置：
1 安装：npm --save-dev install eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y
2 在.eslintrc文件中添加引入此扩展
{
  parser: "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "max-len": [1, 120, 2, {ignoreComments: true}],
    "prop-types": [2]
  }
}

pre-commit插件：提交代码时，通过eslint检测，若有问题不允许提交：
1 安装 npm install pre-commit --save-dev
2 package.json中添加scripts命令：
"scripts": {
  "eslint": "eslint --ext .js src"
}
3 配置文件中添加配置内容：（.git/hooks 好像是在此目录下有配置文件...）
"pre-commit": [
  "eslint"
]

配置文件参考：http://eslint.cn/docs/user-guide/configuring

三、CleanWebpackPlugin
在每次构建前清理 /dist 文件夹，只会生成用到的文件


`}





                </pre>
            </div>
        );
    }
}
export default reactRouter;

