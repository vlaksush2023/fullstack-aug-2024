// import { applyMiddleware, createStore } from "redux";
// import reducer from "./redux-demos/reducers/reducer1";
// import {thunk} from 'redux-thunk';


// import logger from 'redux-logger';

// let middleware = applyMiddleware(logger,thunk);

// const store = createStore(reducer,middleware);
// export default store;







// //store from redux toolkit
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './redux-demos/reducers/reducer1'

const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
}
)
export default store;

