import React from 'react';

class AddTask extends React.Component{

state={
    name:''
}

update=(e)=>{
this.setState({
    name:e.target.value
});
}

addNewTask=(e)=>{
    e.preventDefault();
    if(this.state.name!=='')
    this.props.addNewTask(this.state);
    this.setState({
        name:''
    })
}

cancel=()=>{
    this.setState({
        name:''
    })
}

    render(){
        return(
            <div>
            <br/>
            <form onSubmit={this.addNewTask}>
            <input type="text" onChange={this.update} placeholder="Add Todo" className="addtask" value={this.state.name}></input><br/><br/>
            <button onClick={this.cancel} className="cancel">Cancel</button>&nbsp;
            <button type="submit" className="addtodo">Add Todo</button><br/><br/>
            </form>
            </div>
        );    
    }
}
export default AddTask;