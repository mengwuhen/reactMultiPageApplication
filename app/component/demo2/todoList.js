import React from 'react';
import List from './List';
import '../../public/css/todoList.pcss'
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };

        this.handleAdd= this.handleAdd.bind(this)
        this.handleItemDel = this.handleItemDel.bind(this)
        this.handleItemRecovery = this.handleItemRecovery.bind(this)
    }

    handleAdd() {
        let item = this.refs['todoInput'].value;
        if (item) {
            let list = this.state.list;
            list.push({id: list.length + 1, title: item, status: 1});
            this.setState({list: list}, () => console.warn(this.state.list))
        } else {
            alert('不能为空')
        }
    }

    handleItemDel(id) {
        let list = this.state.list;
        list.find(data => data.id === id).status = 0;
        this.setState({list: list})
    }

    handleItemRecovery(id) {
        let list = this.state.list;
        list.find(data => data.id === id).status = 1;
        this.setState({list: list})
    }

    componentDidMount() {

    }

    render() {
        const {list} = this.state
        return (
            <div className="todoList">
                <input type="text" ref="todoInput"/>
                <button onClick={this.handleAdd}>添加</button>
                <div className="cont">
                    <div className="box">
                        全部
                        <List list={list} handleItemDel={this.handleItemDel}   handleItemRecovery={this.handleItemRecovery} type={0}/>
                    </div>
                    <div className="box">
                        未删除
                        <List list={list} handleItemDel={this.handleItemDel} type={1}/>
                    </div>
                    <div className="box">
                        已删除
                        <List list={list} handleItemRecovery={this.handleItemRecovery} type={2}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;