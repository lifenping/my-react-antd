
import React, { Component } from 'react'
import moment from 'moment'

class item extends Component {
    render() {
        return (
<pre>
<h3>moment应用及总结</h3>
{`
处理日期时间的插件，可解决日期时间在不同浏览器中的兼容性问题，可以用在浏览器环境中使用，也可以在Node.js中，具有良好的跨浏览器及跨系统的兼容性。

1 国际标准ISO 8601，是国际标准化组织的日期和时间的表示方法，全称为《数据存储和交换形式·信息交换·日期和时间的表示方法》。
目前是第三版“ISO8601:2004”以替代第一版“ISO8601:1988”与第二版“ISO8601:2000”。
如：当前的UTC时间是2017-07-21T06:13Z  （ISO 8601 表示法。）
2 协调世界时，又称世界标准时间或世界协调时间，简称UTC（英文“Coordinated Universal Time”／法文“Temps Universel Coordonné”），
是最主要的世界时间标准，其以原子时秒长为基础，在时刻上尽量接近于格林尼治标准时间。
3 CST时间
CST却同时可以代表如下 4 个不同的时区：
Central Standard Time (USA) UT-6:00
Central Standard Time (Australia) UT+9:30
China Standard Time UT+8:00
Cuba Standard Time UT-4:00

可见，CST可以同时表示美国，澳大利亚，中国，古巴四个国家的标准时间。

moment().format("d")   //"5"
moment().day()   //5
moment().format('X') //"1500623482"
moment().add(7, 'days').format('YYYY年MM月DD日');  //"2017年07月28日"

moment(undefined) 输出的是今天日期的对象

参考文档：
`}
<a href="http://momentjs.cn/" target='_blank'>http://momentjs.cn/</a>

{console.log (moment())}

{console.log(moment(undefined))}


</pre>

        )
    }
}

export default item;