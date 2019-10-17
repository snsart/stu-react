import { INPUT_VALUE_CHANGE,ADD_ITEM,DELETE_ITEM, INIT_DATA,} from './actionTypes'

let initState={
    inputValue:"",
    list:[1,2,3]
}

function reducer(state=initState,action){
    if(action.type===INPUT_VALUE_CHANGE){
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState;
    }
    if(action.type===ADD_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    if(action.type===DELETE_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }

    if(action.type===INIT_DATA){
        return action.data;
    }
    return state;
}

export default reducer;