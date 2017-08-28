/*
    markdown 的使用总结：
*/
import React, { Component } from 'react';
import style from "index.less"

class item extends Component {
    render() {
        return (
            <div>
                <ul className={style.liOrder}>
                    <li><a href="http://lifenping.github.io/web-share/#/newflex-flex">http://lifenping.github.io/web-share/#/newflex-flex</a></li>
                    <li><a href="http://www.css88.com/book/css/properties/list/list-style-type.htm">http://www.css88.com/book/css/properties/list/list-style-type.htm</a></li>
                    
                    <li>内容放在&lt; script type="text/html"&gt;或 &lt; script type="text/template"&gt;中，在html文件中可以当文本输出</li>
                </ul>
            </div>
        );
    }
}

export default item;

