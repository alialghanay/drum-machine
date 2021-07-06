import DNC from "./drum-sample-obj";

const intiState = {
    keyCode: null,
    keyTrigger: null,
    id: null,
    src: null
};
export default function reducer(state = intiState, action) {
    console.log(action);
    if(action.type === 'playedSound'){
        return {
            ...state,
            keyCode: DNC[action.id].keyCode,
            keyTrigger: DNC[action.id].keyTrigger,
            id: DNC[action.id].id,
            src: DNC[action.id].src
        };
    }
    return state;
}


// [
//     ...state,
//     {
    
//     }
// ]