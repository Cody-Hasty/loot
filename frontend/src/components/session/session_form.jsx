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
            .then(() => this.props.history.push('/#/'))
    }

    // renderErrors() {
    //         return (
    //             <ul>
    //                 {this.props.errors.map((error, i) => (
    //                     <li key={i}>{error}</li>
    //                 ))}
    //             </ul>
    //         )
    // }

    render() {
        let userName = (
            <label>Pick a username:
                <input
                    type='text'
                    value={this.state.username}
                    onChange={this.update('username')}
                />
            </label>   
        );
        let passVerify = (
            <label>Please enter your password again:
                <input
                    type='password'
                    value={this.state.password2}
                    onChange={this.update('password2')}
                />
            </label>
        )
        
        console.log(this);
        return (
            <div>
                <h3>{this.props.formType}</h3>
                {/* {this.renderErrors()} */}
                <form onSubmit={this.handleSubmit}>
                    {this.props.formType === 'signup' ? userName : null}
                    <label>Enter your email:
                        <input
                            type='text'
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <label>Password:
                        <input
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