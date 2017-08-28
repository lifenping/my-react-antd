# 项目说明
webpack react study

# 项目启动说明：

- npm install / npm run init 
- npm start 

# eslint插件 

### 目前安装：
- "eslint": "^4.3.0",
- "eslint-loader": "^1.9.0",  
- "babel-eslint": "^7.2.3",(为了eslint与 es6,es7兼容) 
## 第三方规则配置记录，目录在此项目中没有应用到 
- "eslint-config-airbnb": "^15.1.0", 
- "eslint-plugin-import": "^2.7.0", 
- "eslint-plugin-jsx-a11y": "^6.0.2", 
规则使用："extends": "airbnb", 

## 提交代码时应用eslint检测
-"lint": "eslint --ext .js src test",    
-"precommit": "npm run lint"  
- 检测失败不允许提交

### 项目中未安装
 - "eslint-plugin-react": "^7.1.0",


 注：目前未开启eslint,原因是应用eslint-loader会报错。。
 
 ### react中插入markdown内容
 ``` 
 https://github.com/rexxars/react-markdown  
 import ReactMarkdown from 'react-markdown'  
 <ReactMarkdown source={"### sss"} />  
 source中不能包含<div>return等内容
 ``` 
 


