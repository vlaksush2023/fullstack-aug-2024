export const increment = () => ({type:"INCREMENT"})

export const decrement = () => ({type:"DECREMENT"})

export const incrementIfNotMax = ()  => {
    return (dispatch, getState) => {
        const { count} = getState();
        if(count<10){
            dispatch(increment())
        }
        else{
            console.log("You reached max count 10")
        }
    }
}
