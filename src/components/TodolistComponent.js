import React from 'react';
import deleteImg from './delete-24px.svg';
import AddTask from './AddTask';


const Todolist=(props)=>{
console.log(props);
    const taskList= props.tasks.length ? (
        props.tasks.map( task=>{
            let isChecked=false;
            if(task.status=="completed"){
                isChecked=true;
            }
            return(<div className="list-group-item tasklist" key={task.id}>
                <input id={task.id} onChange={props.markCompleted} type ="checkbox" checked={isChecked}></input>
                <span className={task.status} >{task.name}</span>
                <button className="delete " onClick={()=>{props.deleteTask(task.id)}} ><img  src={deleteImg}></img></button>
            </div>)
        })
    ) :(<p className ="text-center"> No Tast to Show</p>)

    return (
        <div>
        {/* <div className="todoHeader text-center">
                        <h1 className="todoHeader text-center">TodoList</h1>
                        <Navigation />
                    </div> */}
                    <span onClick={props.filterTaskList} id="all">All</span>&nbsp;\&nbsp;
                    <span onClick={props.filterTaskList} id="completed">Completed</span>&nbsp;\&nbsp;
                    <span onClick={props.filterTaskList} id="active">Active</span>
                    <AddTask addNewTask={props.addNewTask} />
    <div className="list-group">
        {taskList}
    </div></div>
    )
}
export default Todolist;