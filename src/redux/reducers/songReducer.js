import {SELECTED_SONG} from '../actions/actionTypes'


const initialState = null;

function Reducer(state=initialState, action){

   if(action.type===SELECTED_SONG)return action.payload;
   return state;

}

export default Reducer;