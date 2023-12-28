import {INCREASE,DECREASE,RESET} from '../actions/actionTypes'


const initialState = 0;

function Reducer(state=initialState, action){

    switch(action.type){

        case INCREASE:  return state + action.value

        case DECREASE:  return state - action.value

        case RESET:  return initialState

        default:  return state

    }

}

export default Reducer
 