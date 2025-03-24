import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { decrement,increment } from '../reducers/reducer1';

export default function CounterComponent() {

    const count = useSelector(state => state.counter.count)
    const dispath = useDispatch();

  return (
    <div>
        <button onClick={ () => dispath(decrement())}> - </button> &nbsp;
        {count} &nbsp;
        <button onClick={ () => dispath(increment())}> + </button>
    </div>
  )
}
