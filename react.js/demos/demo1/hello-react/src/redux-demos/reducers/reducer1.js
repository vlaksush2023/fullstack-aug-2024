// const initialCount = {count:0}

// const reducer = (state=initialCount, action) => {

//     switch(action.type){
//         case "INCREMENT":
//             return {count:state.count + 1}
//         case "DECREMENT" :
//             return {count:state.count - 1}
//         default:
//             return state;
//     }
// }
// export default reducer




// //reducer for redux tool kit
import { createSlice } from "@reduxjs/toolkit";
const initialState = { count: 0 }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.count += 1
        },
        decrement: state => {
            state.count -= 1
        }
    }
})
export const {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer
