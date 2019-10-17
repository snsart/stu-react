import { INPUT_VALUE_CHANGE,ADD_ITEM,DELETE_ITEM, INIT_DATA,} from './actionTypes'

export const getInputChangeAction=(value)=>({
    type:INPUT_VALUE_CHANGE,
    value:value
})

export const getAddItemAction=()=>({
    type:ADD_ITEM
})

export const getDeleteItemAction=(index)=>({
    type:DELETE_ITEM,
    index
})

export const initDataAction=(data)=>({
    type:INIT_DATA,
    data
});

/* 通过使用redux中间件thunk，dispatch可以接受一个函数作为action，如果redux检测到dispatch接受的参数是函数，就会执行此函数*/

export const getDelayInitDataAction=()=>((dispatch)=>{
    setTimeout(() => {
        const data={
            inputValue:"",
            list:[4,5,6,7,8,9,10,11,12]
        }
        dispatch(initDataAction(data))
    }, 1000);
})