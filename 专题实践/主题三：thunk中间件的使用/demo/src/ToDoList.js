import React from 'react';
import {Button,Input,List} from 'antd';

/* ToDoList是一个纯组件，只负责页面渲染，没有state，所有数据都通过props获取 */

const ToDoList=(props)=>{
    return (<div style={{marginLeft:"20px",marginTop:"20px"}}>
        <Input style={{width:"300px"}} value={props.inputValue} onChange={props.handleInput}/>
        <Button style={{marginLeft:"20px"}} onClick={props.handleAddList}>提交</Button>
        <List
            style={{width:"300px",marginTop:"10px"}}
            bordered
            dataSource={props.list}
            renderItem={(item,index)=> (
                <List.Item onClick={()=>{props.handleDeleteItem(index)}}>
                    {item}
                </List.Item>
            )}
        />
    </div>
)};

export default ToDoList;