import React from 'react';



class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: [{ uId: '', pass: '' }],
            users: [{ uId: 'monali', pass: 'monali' }],
            uId: '',
            pass: '',
            redirectToHome: false,
            userMsg:''
        }
        this.login = this.login.bind(this);
        this.update = this.update.bind(this);
    }

    validate() {
        let errors = [];
        let redirectToHome = false;
        let currentId = this.state.uId;
        let currentPass = this.state.pass;
        let validUser = false;
        if (currentId == '' && currentPass == '') {
            errors.push(
                { uId: 'User Id cannot be empty', pass: 'Password cannot be empty' }
            )
        }
        else if (currentId == '' && currentPass != '') {
            errors.push(
                { uId: 'User Id cannot be empty', pass: '' }
            )
        }
        else if (currentId != '' && currentPass == '') {
            errors.push(
                { uId: '', pass: 'Password cannot be empty' }
            )
        }
        else {
            this.state.users.forEach(user => {
                if (user.uId == currentId) {
                    validUser = true;
                    if (user.pass == currentPass) {
                        errors.push(
                            { uId: '', pass: '' }
                        )
                        redirectToHome = true;
                    }
                    else {
                        errors.push(
                            { uId: '', pass: 'Password is Incorrect' }
                        )
                    }
                }
            });
            if (!validUser) {
                errors.push(
                    { uId: 'User Does Not Exists. Please Register yourself using Register Button', pass: '' }
                )
            }
        }
        this.setState({
            errors,
            redirectToHome
        })
    }

    login(e) {
        e.preventDefault();
        this.validate();
        if (this.state.redirectToHome === true) {
            this.props.history.push('/home');
        }
    }

    update(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    registerUser=()=>{
        let uId= this.state.uId;
        let pass = this.state.pass;
        let users=this.state.users;
        let errors= [];
        errors.push(
            { uId: '', pass: '' }
        );
        users.push({uId:uId,pass:pass});
        this.setState({
            users,
            uId:'',
            pass:'',
            errors,
            userMsg:"User  "+uId+" is Registered Successfully"
        })
        
    }

    render() {
        return (
            <div>
               <h3>Login/Register Form</h3>
                <form className="form-horizontal" onSubmit={this.login}>
                    <div className="form-group">
                        <label className="control-label col-sm-2" >User Name</label>
                        <div className="col-sm-3">
                            <input className="form-control" name="uId" id="username" type="text" onChange={this.update} value={this.state.uId}></input><br />
                            <label className="error">{this.state.errors[0].uId}</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" >Password </label>
                        <div className="col-sm-3">
                            <input className="form-control" name="pass" id="userpass" type="password" onChange={this.update} value={this.state.pass}></input><br />
                            <label className="error">{this.state.errors[0].pass}</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit">Login</button>
                            <button type="button" onClick={this.registerUser}>Register</button>
                        </div>
                    </div>
                    <label className="msg">{this.state.userMsg}</label>
                </form>
            </div>
        );
    }
}




export default LoginComponent;
