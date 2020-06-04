import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            password2: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    update(field) {
        return e => this.setState({ 
            [field]: e.currentTarget.value
        })
    }

    resetForm() {
        this.setState({
            username: '',
            email: '',
            password: '',
            password2: ''
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        this.props.action(user)
            .then(() => this.props.history.push('/#/'));
    }
    renderErrors() {
        const errors  = Object.values(this.props.errors);
        if (errors) {
            console.log(errors);
            return (
                <ul >
                    {errors.map((error, i) =>{
                        return <li key={i}>{error.email} {error.password}</li>
                    })}
                </ul>
                // <div>
                //     {/* {errors.title} */}
                // </div>
            )

        }
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    render() {
        let userName = (
            <label>
                <p className="username-label">Pick a username:</p>
                <input
                    placeholder="username"
                    type='text'
                    value={this.state.username}
                    onChange={this.update('username')}
                />
            </label>   
        );
        let passVerify = (
            <label>
                <p className="password2-label">Please enter your password again:</p>
                <input
                    placeholder="password"
                    type='password'
                    value={this.state.password2}
                    onChange={this.update('password2')}
                />
            </label>
        )
        

        return (
            <div className="session-page">
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit} className="session-form">
                    <h3>{this.props.formType}</h3>
                    {this.props.formType === 'signup' ? userName : null}
                    <label>
                        <p className="email-label">Enter your email:</p>
                        <input
                            placeholder="email"
                            type='text'
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <label>
                        <p className="password-label">Password:</p>
                        <input
                            placeholder="password"
                            type='password'
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    {this.props.formType === 'signup' ? passVerify : null}
                    <button>Let's Go!</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;