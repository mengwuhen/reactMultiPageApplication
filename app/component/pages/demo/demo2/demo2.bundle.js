import React from 'react';
import TodoList from './todoList';
import {Route, NavLink,Redirect,Link} from 'react-router-dom'

// pathname：路由地址
// search：通俗一点讲就是url 中？后面的数据
// hash ：通俗一点讲就是在search后面再加#
// state：通俗一点讲就是 转递一些 状态数据，可以是 对象、数组、字符串等
// 最后url会是这样子的
// http://localhost:8080/#/demo2/demo2-2?sort=this-sort#the-hash
const Index = ({match}) =>
<div>
    <div className="nav">
        <NavLink to={`${match.url}/demo2-1`} activeClassName="selected" exact>demo2-1</NavLink>
        {/*<NavLink to={`${match.url}/demo2-2`} activeClassName="selected" exact>demo2-2</NavLink>*/}
            {/* 要实现的目标是给demo2-2 路由传递参数！然后在TodoList下接收参数！ */}

            {/* //采用link传参会导致demo2-2颜色不会改变 */}
        {/* <Link to={{
            pathname: `${match.url}/demo2-2`,
            search: '?sort=this-sort',
            hash: '#the-hash',
            state: { fromDashboard: '222' }
        }}>demo2-2</Link> */}

        {/* 解决办法 */}
        <NavLink to={{
            pathname: `${match.url}/demo2-2`,
            search: '?sort=this-sort',
            hash: '#the-hash',
            state: { fromDashboard: '222' }
        }} activeClassName="selected" exact>demo2-2</NavLink>
    </div>
        {/* 重定向 */}
    <Route exact path={`${match.url}`}
           render={() => (<Redirect to={`${match.url}/demo2-1`}/>)}/>
    <Route path={`${match.url}/demo2-1`} component={TodoList}/>
    <Route path={`${match.url}/demo2-2`} component={TodoList}/>
</div>
;

export default Index;