import React,{Component,Fragment} from 'react';
import {Button,Input,List} from 'antd';
import 'antd/dist/antd.css';
import store from './store';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreator';

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
        return (
            <Fragment>
                <div style={{marginLeft:"20px",marginTop:"20px"}}>
                    <Input style={{width:"300px"}} value={inputValue} onChange={this.handleInput}/>
                    <Button style={{marginLeft:"20px"}} onClick={this.handleAddList}>提交</Button>
                    <List
                        style={{width:"300px",marginTop:"10px"}}
                        bordered
                        dataSource={list}
                        renderItem={(item,index)=> (
                            <List.Item onClick={()=>{this.handleDeleteItem(index)}}>
                                {item}
                            </List.Item>
                        )}
                    />
                 </div>
            </Fragment>
        );
    }
}

export default App;
