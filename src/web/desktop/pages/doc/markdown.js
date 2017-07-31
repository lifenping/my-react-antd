/*
    markdown 的使用总结：
*/
import React, {Component} from 'react';


class item extends Component {
	render() {
		return (
			<div>
                <p>markdown 的使用总结：</p>
                <p>代码:通常编辑器根据代码片段适配合适的高亮方法，但你也可以用 ``` 包裹一段代码，并指定一种语言，也可以用code标签</p>
                <p>换行：如果另起一行，只需在当前行结尾加 2 个空格，如果是要起一个新段落，只需要空出一行即可。 </p>
                <p>分隔符：如果你有写分割线的习惯，可以新起一行输入三个减号-。当前后都有段落时，请空出一行</p>
                <p>符号转义:如果你的描述中需要用到 markdown 的符号，比如 _ # * 等，但又不想它被转义，这时候可以在这些符号前加反斜杠，如 \_ \# \* 进行避免。</p>
                <p>引用:多一个 > 嵌套一层引用;   >     同样的，在前面加四个空格形成代码块</p>
                <a target="_blank" href="https://segmentfault.com/markdown">引用文档</a>
				
            </div>
		);
	}
}

export default item;

