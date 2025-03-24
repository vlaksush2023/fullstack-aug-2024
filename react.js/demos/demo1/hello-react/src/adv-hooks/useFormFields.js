
import React,{useReducer} from 'react';

function  useFormFields(initialState) {

    function reducer(state,action){
        switch(action.type){
            case 'SET_FIELD':
                return {
                    ...state,
                    [action.field]:action.value
                };
            case 'RESET_FIELDS':
                return initialState;
            
            default:
                return state;
        }
    }

    const [state,dispatch] = useReducer(reducer,initialState);

    const handleChange  = (e) => {
        dispatch({
            type:'SET_FIELD',
            field:e.target.name,
            value:e.target.value
        })
    }

    const resetFields = () => {
        dispatch({type:'RESET_FIELDS'})
    }

    return [state,handleChange,resetFields];
}

export default useFormFields;