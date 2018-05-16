/**
 * 导航
 */
import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router';
import { Menu, Icon, Switch } from 'antd';

const SubMenu = Menu.SubMenu;

class Nav extends React.Component {
    state = {
        theme: 'light',
        current: '1'
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <div className={this.props.className}>
                <Menu
                    theme={this.state.theme}
                    onClick={this.handleClick}
                    style={{ width: 240 }}
                    defaultOpenKeys={['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8']}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                >
                    <Menu.Item key="index1"><IndexLink to="/">Home</IndexLink></Menu.Item>
                    <Menu.Item key="index2"><Link to="/note_test">笔记</Link></Menu.Item>
                    <SubMenu key="sub3" title={<span><Icon type="appstore" />react</span>}>
                        <Menu.Item key="sub3-7"><Link to="react/note">笔记</Link></Menu.Item>
                        <Menu.Item key="sub3-1"><Link to="react/react-router">react-router</Link></Menu.Item>
                        <Menu.Item key="sub3-3"><Link to="react/life">react组件的生命周期</Link></Menu.Item>
                        <Menu.Item key="sub3-6-1"><Link to="react/flux">flux</Link></Menu.Item>
                        <Menu.Item key="sub3-6-2-1"><Link to="react/redux">redux</Link></Menu.Item>
                        <Menu.Item key="sub3-8"><Link to="react/antd">antd 练习</Link></Menu.Item>
                        <Menu.Item key="sub3-9"><Link to="react/react-practice">react 练习</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="appstore" />js</span>}>
                        <Menu.Item key="sub4-1ast-2"><Link to="/js/note">笔记</Link></Menu.Item>
                        <Menu.Item key="sub4-1-0"><Link to="/js/__proto__">原型链与原型继承及类继承</Link></Menu.Item>
                        <Menu.Item key="sub4-1-2"><Link to="/js/this">this</Link></Menu.Item>
                        <Menu.Item key="sub4-1-3"><Link to="/js/module">模块化</Link></Menu.Item>
                        <Menu.Item key="sub4-1"><Link to="/js/es6-Symbol">es6-Symbol</Link></Menu.Item>
                        <Menu.Item key="sub4-2"><Link to="/js/es6-Promise">es6-Promise</Link></Menu.Item>
                        <Menu.Item key="sub4-last"><Link to="/js/moment">moment应用</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" title={<span><Icon type="appstore" />nodejs</span>}>
                        <Menu.Item key="sub5-2"><Link to="/nodejs/note">笔记</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub6" title={<span><Icon type="appstore" />electron</span>}>
                    </SubMenu>
                    <SubMenu key="sub7" title={<span><Icon type="appstore" />app调研</span>}>
                    </SubMenu>
                    <Menu.Item key="sub8-1"><Link to="/markdown">markdown语法</Link></Menu.Item>
                    <Menu.Item key="sub8-2"><Link to="/webpack">webpack</Link></Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Nav;