import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { decrement,increment } from '../actions/action';

export default function CounterComponent() {

    const count = useSelector(state => state.count)
    const dispath = useDispatch();

  return (
    <div>
        <button onClick={ () => dispath(decrement())}> - </button> &nbsp;
        {count} &nbsp;
        <button onClick={ () => dispath(increment())}> + </button>
    </div>
  )
}
