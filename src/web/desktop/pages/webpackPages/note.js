
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
3 在命令中配置："precommit": "npm run eslint"
或：
配置文件中添加配置内容：（.git/hooks 好像是在此目录下有配置文件...）
"pre-commit": [
  "eslint"
]

配置文件参考：http://eslint.cn

三、CleanWebpackPlugin
在每次构建前清理 /dist 文件夹，只会生成用到的文件

四、代码分离
vendor 在 webpack 中对应的功能点是 CODE SPLITTING 也可以在此查看 webpack 对其的一些说明，
功能点：代码分割，需要配合插件 CommonsChunkPlugin

四、souce map
devtool: 'cheap-module-source-map'
具体查看文档：https://doc.webpack-china.org/configuration/devtool/#devtool

五、模块热加载的应用：
babel-preset-react-hmre  插件用于模块热加载（HMR）
启动：
可在.babelrc文件中添加以下配置
"env":{
    "development":["react-hmre"]
}

六、在应用css modules的文件中应用global css并不打包，可用:global标签来包含不作用于css modules中的内容，如：
:global{
	.lastCol{
			border:0;
		}
}
:global .lastCol{
	border-right-width:0;
}
aa{
	:global{border:0;}
}
七. 包管理文件中引入git文件："nsip": "git+https://git.ms.netease.com/***.git#v0.0.15"

`}





                </pre>
            </div>
        );
    }
}
export default reactRouter;

