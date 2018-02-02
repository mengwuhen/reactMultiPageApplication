// export default (state = 0, action) => {
//   console.warn(action.type)
//     switch (action.type) {
//       case 'INCREMENT':
//         return state + 1
//       case 'DECREMENT':
//         return state - 1
//       default:
//         return state
//     }
//   }

  export default (state = {state:0}, action) => {
    console.warn(action.type)
      switch (action.type) {
        case 'INCREMENT':
            console.log(1);
            return Object.assign({}, state, {state: state.state + 1});
        case 'DECREMENT':
          return Object.assign({}, state, {state: state.state - 1});
        default:
          return state
      }
    }