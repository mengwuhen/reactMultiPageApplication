import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducer'

let store = createStore(counter)

console.warn(store)
console.warn(store.getState())
export default class Index extends React.Component{
    render(){
        return (
            <Counter
                value={store.getState()}
                onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
            />
        )
    }
}

// store.subscribe(Index)