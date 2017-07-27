import React, {Component} from 'react';

class item extends Component {
	render() {
		return (
<pre>

<h3>项目tag的应用</h3>
{`
1 看项目中引入的 组件tag版本 是多少，基于此tag拉取一个新分支newBranch
2 在newBranch分支中添加新功能代码，完成后更新引入的 组件tag版本为newBranch，进行测试，测试成功后：
3 把newBranch分支合到master中。
3 往master中合并代码时若有冲突，则看master的 组件tag版本 是多少，若高于newBranch基于的 组件tag版本,则从 master中对应的 组件tag版本 拉一个新分支，把此分支代码合到 newBranch 分支中，新加一个tag.
4 往master中合并没有冲突，则直接基于master中新提交功能的版本打一个新tag.

后期有待进行验证

`}


</pre>
		);
	}
}

export default item;