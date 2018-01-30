import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };

        this.handleAdd= this.handleAdd.bind(this)
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
        console.warn(id)
        let list = this.state.list;
        list.find(data => data.id === id).status = 0;
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
                    
                <div className="list">

                </div>

                
                <div className="list">
                {
                    list.map(data => [
                        data.status === 1 ?
                            <li key={data.id}>{data.title}
                                <button onClick={() => this.handleItemDel(data.id)}>删除</button>
                            </li>
                            :
                            null
                    ])
                }
                </div>
            </div>
        );
    }
}

export default TodoList;