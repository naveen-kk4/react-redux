import {createStore,combineReducers} from "redux" ;
import counterReducer from "../reducers/counterReducer.js";
import songReducer from "../reducers/songReducer.js";

const rootReducer = combineReducers({
    song:songReducer,
    counter:counterReducer
})

const store = createStore(rootReducer);
export default store;