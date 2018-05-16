
import React, { Component } from 'react'

class reactRouter extends React.Component {
    render() {
        return (
            <div>
                <pre>
                    <h3>在webpack中一切皆资源，loader 转换器可以将各种类型的资源转换成 JavaScript 模块，故可用以下方式来展示图片</h3>
                    {`
                        同时要引用url-loader，具体查看官网中的相关的loaders
                        1. 通过 img 标签实现：
                        import imgLife from './images/life.png'  //es6方式引入
                        <img src={imgLife} />  
                        或 <img src={require('./images/life.png')} />   //conmmon.js方式引入
                        2. 在css文件中用background-image来实现
                    
                        `}

                    <h3>eslint 插件的使用-可配合开源的airbnb使用：</h3>
                    {`
                        1. 相关依赖包
                        "eslint": "^4.16.0",
                        "eslint-config-airbnb": "^16.1.0",
                        "eslint-plugin-import": "^2.8.0",
                        "eslint-plugin-jsx-a11y": "^6.0.3",
                        "eslint-plugin-react": "^7.6.0",

                        2. 目录根目录下添加.eslintrc文件，覆盖插件中的eslint相关规则，若借助了airbnb，可添加相关的配置
                        {
                            parser: "babel-eslint",
                            "extends": "airbnb",
                            "rules": {}
                        }
                    
                        `}
                    <h3>pre-commit插件：提交代码时，通过eslint检测，若有问题不允许提交：</h3>
                    {`
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
                    `}

                    <h3>CleanWebpackPlugin</h3>
                    {`
                    在每次构建前清理 /dist 文件夹，只会生成用到的文件，也可通过build命令时，添加rm -rf ./dist 来删除
                    
                    `}

                    <h3>Devtool：选择一种 source map 格式来增强调试过程</h3>
                    {`
                    devtool: 'cheap-module-source-map' 常用于开发环境，默认为false
                    具体查看文档：https://www.webpackjs.com/configuration/devtool/#devtool
                    
                    `}

                    <h3>css module</h3>
                    {`
                    使用了 CSS Modules 后，就相当于给每个 class 名外加加了一个 :local，以此来实现样式的局部化，如果你想切换到全局模式，使用对应的 :global。
                    可用:global标签来包含不作用于css modules中的内容，如：
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
                    `}
                    <h3>包管理文件中引入git文件："nsip": "git+https://git.ms.netease.com/***.git#v0.0.15"</h3>
                </pre>
            </div>
        );
    }
}
export default reactRouter;

