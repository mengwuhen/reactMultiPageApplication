// import React from 'react'
// import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import Counter from './components/Counter'
// import counter from './reducer'

// let store = createStore(counter)

// console.warn(store)
// console.warn(store.getState())
// export default class Index extends React.Component{
//     render(){
//         return (
//             <Counter
//                 value={store.getState()}
//                 onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//                 onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//             />
//         )
//     }
// }

// store.subscribe(Index)

import React from 'react'
import {Provider, connect} from 'react-redux'
import Counter from './components/Counter'
import store from './reducer/store'

class Main extends React.Component {
    render() {
        let state = this.props.storeState;
        console.log(state);
        return (
            <Counter
                value={state.state}
                onIncrement={() => store.dispatch({type: 'INCREMENT'})}
                onDecrement={() => store.dispatch({type: 'DECREMENT'})}
            />
        )
    }
}

const App = connect((state) => ({storeState: state}))(Main);
export default () => (
    <Provider store={store}>
        <App/>
    </Provider>
);