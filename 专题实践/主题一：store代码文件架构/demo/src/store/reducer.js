let initState={
    inputValue:"",
    list:[1,2,3]
}

function reducer(state=initState,action){
    if(action.type==='input_value_change'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState;
    }else if(action.type==='add_item'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }else if(action.type==='delete_item'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}

export default reducer;