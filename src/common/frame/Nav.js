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
                    <Menu.Item key="index2"><Link to="/test">test</Link></Menu.Item>
                    <SubMenu key="sub3" title={<span><Icon type="appstore" />react</span>}>
                        <Menu.Item key="sub3-7"><Link to="react/note">笔记</Link></Menu.Item>
                        <Menu.Item key="sub3-1"><Link to="react/react-router">react-router</Link></Menu.Item>
                        <Menu.Item key="sub3-3"><Link to="react/life">react组件的生命周期</Link></Menu.Item>
                        <Menu.Item key="sub3-6-1"><Link to="react/flux">flux</Link></Menu.Item>
                        <Menu.Item key="sub3-6-2"><Link to="react/redux">redux</Link></Menu.Item>
                        <Menu.Item key="sub3-8"><Link to="react/antd">antd 练习</Link></Menu.Item>
                        <Menu.Item key="sub3-9"><Link to="react/react-practice">react 练习</Link></Menu.Item>
                        <Menu.Item key="sub3-10"><Link to="react/reactNative">react Native练习</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub1" title={<span><Icon type="appstore" />webpack笔记</span>}>
                        <Menu.Item key="sub1-6"><Link to="/webpackPages/note">应用总结</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="appstore" />js</span>}>
                        <Menu.Item key="sub4-6"><Link to="/js/moment">moment应用</Link></Menu.Item>
                        <Menu.Item key="sub4-2">promise</Menu.Item>
                        <Menu.Item key="sub4-3">Fetch</Menu.Item>
                        <Menu.Item key="sub4-4">Decimal组件研究与应用</Menu.Item>
                        <Menu.Item key="sub4-5">lodash</Menu.Item>

                    </SubMenu>
                    <SubMenu key="sub5" title={<span><Icon type="appstore" />nodejs</span>}>
                        { /* <Menu.Item key="sub5-2">Option 10</Menu.Item> */}
                    </SubMenu>
                    <SubMenu key="sub6" title={<span><Icon type="appstore" />electron</span>}>
                    </SubMenu>
                    <SubMenu key="sub7" title={<span><Icon type="appstore" />app调研</span>}>
                    </SubMenu>
                    <SubMenu key="sub8" title={<span><Icon type="appstore" />参考文档</span>}>
                        <Menu.Item key="sub8-1"><Link to="doc/markdown">markdown语法</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default Nav;