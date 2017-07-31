import React, { Component } from 'react';

class item extends Component {
    render() {
        let content = "<span>动态插入的内容</span>"
        return (



<pre>
<h3>React中pre标签的使用：</h3>
{`
在react中pre标签内容中的首行空格及空行是会被去除的，这点和在.html文件中应用pre标签是不同的，若想保留空格及空行，可在内容外添加大括号和反引号(可把里面的内容当成文本输出)，具体可查看本页源码。

`}

<h3>React中html转义：</h3>
{`
默认插入到dom中的html内容是会被转义的，避免XSS攻击。
解决办法：
给标签添加dangerouslySetInnerHTML属性，来输出html代码，
如：let content = "<span>动态插入的内容</span>"
<div>{content}</div>
<div dangerouslySetInnerHTML={{ __html: content }}></div>
分别输出：
`}
<div>{content}</div>
<div dangerouslySetInnerHTML={{ __html: content }}></div>

         
        
            
</pre>




        );
    }
}

export default item;