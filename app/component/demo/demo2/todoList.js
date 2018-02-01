import React from 'react';
import List from './List';
import '../../../public/css/todoList.pcss'
// import apiRequest from '../../public/js/apiRequest.js'
import "babel-polyfill";
import apiRequestAsync from '../../../public/js/apiRequestAsync';
import utils from '../../../public/js/utils';
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

    async handleTodoList() {
        let todoList = await apiRequestAsync.post('todoList');
        console.warn(todoList)
        this.setState({list: todoList.list});
        let todoList1 = await apiRequestAsync.post('todoList');
        console.warn(todoList1);
        let todoList2 = await apiRequestAsync.post('todoList');
        console.warn(todoList2);
    }

    componentDidMount() {
        // apiRequest.get('todoList',{}, data => this.setState({list:data.list}))
        this.handleTodoList()
    }

    render() {
        const {list} = this.state

        let {location} = this.props;
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

                {
                    location ?
                        <div>
                            <div>hash:{location.hash}</div>
                            <div>pathname:{location.pathname}</div>
                            <div>search:{utils.urlParam('sort',location.search)}</div>
                            <div>state:{location.state && location.state.fromDashboard}</div>
                        </div>
                        :
                        null
                }
            </div>
        );
    }
}

export default TodoList;