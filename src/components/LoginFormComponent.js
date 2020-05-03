import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import TaskManagement from './TaskManagement';
import Login from './LoginComponent';


class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: [{ uId: '', pass: '' }],
            users:[{uId:'abhi' ,pass:'abhi'}],
            uId: '',
            pass: '',
            redirectToHome: false
        }
    }

    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/" component={Login}></Route>
                    <Route exact path="/home" component={TaskManagement}></Route>
                    
                </Router>
            </div>
        );
    }
}




export default LoginForm;

