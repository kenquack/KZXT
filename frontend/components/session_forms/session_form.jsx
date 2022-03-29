import React from "react";

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

    componentDidMount() {
        document.body.style.overflow = "hidden"
    }

    componentWillUnmount() {
        document.body.style.overflow = "visible";
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                <li key={`error-${i}`}>
                    {error}
                </li>
                ))}
            </ul>
        )
    };

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
        let link;
        let linkName;
        let question;
        if (this.props.formType === 'signup') {
            link = '/login';
            linkName = 'Sign Up'
            question = 'Already a member?'
        } else {
            link = '/signup';
            linkName = 'Sign In';
            question = 'Not a member?'
        };

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className='login-form-box'>
                    <img src={window.logoblkURL} id='login-logo'/>
                    {this.renderErrors()}
                    <br/>
                    <div className="login-form">
                        <label>Email Address <br/>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </label>
                        <br/>
                        <br/>
                        <label>Password <br/>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <br/>
                        <button className="session-submit">{linkName}</button>
                        <br/>
                        <button className='demo' onClick={this.loginDemo}>Demo User</button>
                    </div>
                </form>

                {question}
                
                {this.props.otherForm}
            </div>
        )
    }
}

export default SessionForm;