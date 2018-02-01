// import React from 'react';
// import {HashRouter, Route, NavLink} from 'react-router-dom'
// import '../../public/css/index.pcss'
// import Seconds from '../common/Seconds.js'


// import Shop from '../shop/index';
// import Echart from '../echart/index';
// import G2 from '../g2/index';
// import Demo1 from '../demo/demo1/index';
// import Demo2 from '../demo/demo2/index';


// // NavLink：渲染后会被转化程a链接
// // to：就是跳转页面地址
// // activeClassName：就是链接和当前页面理由一致后会使用这个样式。
// // exact ：精确匹配
// const Index = () =>
// <HashRouter>
//     <div>
//         <div className="nav">
//             <NavLink to="/" activeClassName="selected" exact>首页</NavLink>
//             <NavLink to="/shop" activeClassName="selected" exact>商城</NavLink>
//             <NavLink to="/demo1" activeClassName="selected" exact>demo1</NavLink>
//             <NavLink to="/demo2" activeClassName="selected" >demo2</NavLink>
//             <NavLink to="/echart" activeClassName="selected" exact>echart</NavLink>
//             <NavLink to="/g2" activeClassName="selected" exact>g2</NavLink>
//         </div>
//         <Route exact path="/" component={() => <Seconds title="首页"/>}/>
//         <Route path="/shop" component={Shop}/>
//         <Route path="/demo1" component={Demo1}/>
//         <Route path="/demo2" component={Demo2}/>
//         <Route path="/echart" component={Echart}/>
//         <Route path="/g2" component={G2}/>
//     </div>
// </HashRouter>
// ;

// export default Index;

import React from 'react';
import Seconds from '../common/Seconds'
import '../../public/css/index.pcss'

const Index = () => <Seconds title="首页"/>;

export default Index;