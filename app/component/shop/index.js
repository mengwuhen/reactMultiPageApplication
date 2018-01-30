import React from 'react';
import '../../public/css/shop.pcss'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {id: 1, title: '前端人人1'},
                {id: 2, title: '前端人人2'},
                {id: 3, title: '前端人人3'},
                {id: 4, title: '前端人人4'},
                {id: 5, title: '前端人人5'},
                {id: 6, title: '前端人人6'},
                {id: 7, title: '前端人人7'},
                {id: 8, title: '前端人人8'},
                {id: 9, title: '前端人人9'}
            ],
        };
    }

    handleItemDel(id) {
        let list = this.state.list;
        list.splice(list.findIndex(data => data.id === id), 1);
        this.setState({list: list})
    }

    render() {
        const {list} = this.state;
        return (
            <div className="content">
                {
                    list.map((data,index) => {
                        return (
                            <li key={data.id}>{data.title} <button onClick={() => this.handleItemDel(data.id)}>删除</button></li>
                        )
                    })
                }
            </div>
        );
    }
}

export default Index;