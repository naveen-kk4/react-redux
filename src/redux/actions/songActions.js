import { SELECTED_SONG } from "./actionTypes";


export default function(value){
    return{
        type:SELECTED_SONG,
        payload:value
    }
}