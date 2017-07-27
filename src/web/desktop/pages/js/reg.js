import React, { Component } from 'react'


class item extends Component {
    render() {
        return (
<pre>
在控制台输出js语句：<br />

1. 编写正则表达式：校验用户密码：以字母开头，长度在6~18之间，只能包含 字符 字母、数字和下划线<br /><br />
{/^[a-zA-Z][\w]{5,17}$/.test(1111)}

2. 编写正则表达式：验证字符串str是否符合‘从最后一位起，往前每满3个数字用逗号，分隔 ’规则 <br />
从左往右：<br />
{ /*"121212".replace(/(\d{3})(?=[^$])/g, "$1,")*/ }  
从右往左：<br />
{ "1212121".replace(/(?=(?:\d{3})+(?!\d))/g,',') }  

3. 编写正则表达式：验证人民币货币格式（保留小数点2位）<br /><br />
{ /^\d+[.]\d\d$/.test(12.99) }

4. 编写正则表达式：验证日期格式（YYYY-MM）（YYYY-MM-DD）<br /><br />
{ /^[\d]{4}-[\d]{2}$/.test("2010-12") }

5. 编写正则表达式：判断是否是汉字<br /><br />
{ /^[\u4E00-\u9FA5]+$/.test("汉字") } 

6. 编写正则表达式：检查给定字符串str是否包含连续重复的字母（a-zA-Z）<br /><br />
{/([a-zA-Z])\1/.test("aaaa")}  

7. 编写函数：检查给定字符串str是否包含 3 个连续的数字 <br /><br />
{`  1. 如果包含，返回最早出现的 3 个数字的字符串
  2. 如果不包含，返回 false
`}
{

function testReg(str){
	var _reg = /([\d])(\1){2}/;
	if ( _reg.test( str ) ){
		return _reg.exec(str)[0]
	}else{
		return false;
	}
} 

}
8. 编写函数：删除字符串首尾空白字符<br /><br />
{

function del(str){
	var _reg = /(^\s*)|(\s*$)/g
	return str.replace(_reg,'')
}

}

9. 编写正则表达式：校验小于或等于3600的正整数<br /><br />
{ /^([\d]{0,3}|[1-3][0-5][\d]{2}|3600)$/.test(1222) }

{`
10. let key = 'startTime', value = '12222222'
    let string = '|currentTime:1506006420000||startTime:1505944800000||endTime:1506024001000||pauseTime:1497607200000||restartTime:1497614400000|'
    编写函数：使用正则表达式替换string里的key对应的value
`}
{
   
function replace(str, key, value) {
	return str.replace(new RegExp(`(${key}:)([^|]*)`),`$1${value}`);
}

}

</pre>


        )
    }
}

export default item;
