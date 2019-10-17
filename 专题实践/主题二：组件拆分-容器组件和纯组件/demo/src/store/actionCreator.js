import { INPUT_VALUE_CHANGE,ADD_ITEM,DELETE_ITEM} from './actionTypes'

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