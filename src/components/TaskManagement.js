import React from 'react';
import Todolist from './TodolistComponent';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';



const Navigation = () => {
    return (
        <div>
            <NavLink activeClassName="selected" to='/home'>Home</NavLink>&nbsp;|&nbsp;
            <NavLink activeClassName="selected" to='/about'>About</NavLink>
        </div>
    );
}

const About = (props) => {
    console.log(props);

    return (
        <h1>About here ....</h1>
    );
}

class TaskManagement extends React.Component {

    constructor(props) {
        super(props);
        this.markCompleted = this.markCompleted.bind(this);
        this.filterTaskList=this.filterTaskList.bind(this);
    }

    state = {
        taskList: [
            { id: 1, name: 'Study', status: "active" },
            { id: 2, name: 'Training ', status: "active"}
        ],
        taskListCopy: []
    }

    deleteTask = (id) => {
        const taskList = this.state.taskList.filter((task) => {
            return task.id !== id;
        });

        this.setState({
            taskList: taskList
        });
    };

    markCompleted (event){
        let taskList = this.state.taskList;
        if (event.target.checked === true) {
            event.target.nextSibling.className = "completed";
            taskList.forEach((task) => {
                if (event.target.id == task.id) {
                    task.status = "completed";
                }
            }
            )
        }
        else{
            event.target.nextSibling.className = "";
            taskList.forEach((task) => {
                if (event.target.id == task.id) {
                    task.status = "active";
                }
            })
        }
        this.setState({
            taskList
        })      
    };

    addNewTask = (task) => {
        task.id = Math.random();
        task.status="active"
        const taskList = [...this.state.taskList, task];
        this.setState({
            taskList
        })
    }

    filterTaskList (e) {
        e.target.activeClassName = "selectedFilter";
        if( this.state.taskListCopy.length===0)
        this.state.taskListCopy = this.state.taskList;

        if (e.target.id === "all" && this.state.taskListCopy.length > 0) {
            this.setState({
                taskList: this.state.taskListCopy,
                taskListCopy: []
            })
        }
        else if (e.target.id === "completed" || e.target.id === "active") {
            this.setState({
                taskList: this.state.taskListCopy.filter((task) => {
                    return task.status === e.target.id;
                })
            })
        }
    }

    render() {
        return (
            <div className="tasks container ">
                <Router>
                    <div className="todoHeader text-center">
                        <h1 className="todoHeader text-center">TodoList</h1>
                        <Navigation />
                    </div>
                    <Route exact path="/home" component={() => <Todolist tasks={this.state.taskList} deleteTask={this.deleteTask} markCompleted={this.markCompleted} addNewTask={this.addNewTask} filterTaskList={this.filterTaskList}/>}></Route>
                    <Route path="/about" component={About}></Route>
                </Router>

            </div>
        );
    }
}
export default TaskManagement;