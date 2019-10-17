import React,{Component} from 'react';
import 'antd/dist/antd.css';
import store from './store';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreator';
import ToDoList from './ToDoList';

class App extends Component{

    constructor(props){
        super(props);

        this.state=store.getState();
        this.handleInput=this.handleInput.bind(this);
        this.handleAddList=this.handleAddList.bind(this);
        this.handleDeleteItem=this.handleDeleteItem.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    handleInput(e){
        const action=getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleAddList(e){
        const action=getAddItemAction();
        store.dispatch(action);
    }

    handleDeleteItem(index){
        const action=getDeleteItemAction(index);
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    render(){
        const {inputValue,list}=this.state;
        return <ToDoList
            inputValue={inputValue}
            list={list}
            handleInput={this.handleInput}
            handleAddList={this.handleAddList}
            handleDeleteItem={this.handleDeleteItem}
        />
    }
}

export default App;
