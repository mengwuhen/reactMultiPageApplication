import React from 'react';
import '../../public/css/common.pcss'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.pathname = window.location.pathname
    }

    handleNavClassName(name,index) {
        if (this.pathname.indexOf(name + '.html') !== -1) {
            return "selected"
        } else {
            return null
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="header">
                <i className="ico-header-logo"/>
                <div className="nav">
                    <a href="/index.html" className={this.handleNavClassName('index',1)}>首页</a>
                    <a href="/shop.html" className={this.handleNavClassName('shop')}>商城</a>
                    <a href="/demo.html" className={this.handleNavClassName('demo')}>react路由演示</a>
                    <a href="/echart.html" className={this.handleNavClassName('echart')}>echart演示</a>
                    <a href="/g2.html" className={this.handleNavClassName('g2')}>g2演示</a>
                    <a href="/amap.html" className={this.handleNavClassName('amap')}>高德热力图演示</a>
                    <a href="/redux.html" className={this.handleNavClassName('redux')}>redux</a>
                </div>
            </div>
        );
    }
}

export default Header;