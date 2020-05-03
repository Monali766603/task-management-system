import React from 'react';

const InputComponent = (props) => {
    return (
        <div className="form-group">
            <label className="control-label col-sm-2" >{props.lable}</label>
            <div className="col-sm-10">
                <input type={props.type} id={props.id} className="form-control" onChange={props.handleChange}></input>
                <label className="error"></label>
            </div>
        </div>
    );
}
export default InputComponent;