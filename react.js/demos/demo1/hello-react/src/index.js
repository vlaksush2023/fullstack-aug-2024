import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './store';

// console.log("working")
// const r1 = 0;
// const r2 = { name: "ram" }

// //reducer
// function reducer1(state = r1, action) {
//   if (action.type == "INCREMENT") {
//     return state += 1;
//   }
//   else if (action.type == "DECREMENT") {
//     return state -= 1;
//   }
//   return state;
// }

// //reducer
// function reducer2(state = r2, action) {
//   if (action.type == "CHANGENAME") {
//     return { name: action.name }
//   }
//   else if (action.type == "RESETNAME") {
//     return { name: "ram" }
//   }
//   return state;
// }

// //combine reducers

// // function reducer(state = { r1, r2 }, action) {
// //   return {
// //     re1: reducer1(state.r1,action),
// //     re2: reducer2(state.r2,action)
// //   }
// // }

// let reducer = combineReducers({
//   re1:reducer1,
//   re2:reducer2
// })

// //store
// let store = createStore(reducer);
// console.log(store.getState());

// store.dispatch({ type: "CHANGENAME", name: "bala" })
// console.log(store.getState())

// store.dispatch({type:"INCREMENT"})
// console.log(store.getState())

// store.dispatch({ type: "RESETNAME" })
// console.log(store.getState())



const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>

)