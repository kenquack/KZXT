import React from "react";
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.loginDemo = this.loginDemo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    loginDemo(e){
        e.preventDefault();
        let demoUser = {email: "demo@demo.com", password: "demoPassword"};
        this.props.loginDemo(demoUser);
        this.props.closeModal();
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    render() {
        let header = this.props.formType;
        let link;
        let linkName;
        let question;
        if (this.props.formType === 'signup') {
            link = '/login';
            linkName = 'Login'
            question = 'Already a member?'
        } else {
            link = '/signup';
            linkName = 'SignUp';
            question = 'Not a member?'
        };

        return (
            <div>
                <h1>{header}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <br/>
                    <br/>
                    <label>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <button>{this.props.formType}</button>
                    <button className='demo' onClick={this.loginDemo}>Demo User</button>
                </form>

                {question}
                {this.props.otherForm}
            </div>
        )
    }
}

export default SessionForm;