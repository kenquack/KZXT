import React from "react";
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        //resets form
        this.setState({
            email: "",
            password: ""
        })
    }

    render() {
        let header = this.props.formType;
        let link;
        let linkName;
        if (this.props.formType === 'signup') {
            link = '/login';
            linkName = 'Login'
        } else {
            link = '/signup';
            linkName = 'SignUp'
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
                </form>
                <Link to={link}>{linkName}</Link>
            </div>
        )
    }
}

export default SessionForm;