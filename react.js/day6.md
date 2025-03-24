# State management  using Redux

## useState     - a compoennt
## useContext   - share data between components


# Redux
its not part of react library , we have to install
store - src 
no - re-render
provides tools - tracking , debugging

## How Redux Works
store {} - The central place where all your data lives.
actions (object) {} - messages or instructions thay say what needs to change in the store.
reducers - pure function - function, that update the store based on the action received.
component - UI Element that read data from the store and can send actions to update it(dispatching)


## Installation 
```bash
npm install redux
```

# Demo - Understanding redux

# Redux Middleware

* Middleware is a layer in the action flow that can intercept actions and allow
additional logic to be run before undating the state.  
* It can be used for logging ,  error handling , async ... 

* store -  middleware  -  reducers

## How to use middleware into store
```js
import { applyMiddleware, createStore } from "redux";
import reducer from "./redux-demos/reducers/reducer1";

import logger from 'redux-logger';

let middleware = applyMiddleware(logger);

const store = createStore(reducer,middleware);
export default store;
```


# Redux Thunk

- Redux Thunk is a middleware for Redux that allows action creators to return a function, enabling asyc login like API calss.
- Its important for managing side effects and improving state management in our application.   

- call(url) // 10sec
- function (thunk) - 


## Redux Toolkit
createSlice
configureStore

* Redux Toolkit is a simplified approach to writing redux logic.  
* It reduces boilerplate code and encourages best practices. 



```bash
npm install @reduxjs/toolkit
```
