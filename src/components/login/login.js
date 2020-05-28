import React, { Component } from 'react'
import LoginService from './loginService'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            showSuccess: false,
            showError: false,
            errorMessage: "",
            successMessage: ""
        }

        this.LoginService = new LoginService();
    }

    changeText = e => {
        let nome = e.target.name;
        let val = e.target.value;
        this.setState({
            [nome]: val
        })
    }

    onSubmit = e => {
        e.preventDefault()
    }

    login() {
        this.LoginService.login(this.state.username, this.state.password, this.LoginSuccessOrError)
        console.log(this.state.username, this.state.password);
    }

    LoginSuccessOrError = (dataResult) => {

        if (dataResult.token) {
            this.setState({
                showSuccess: true,
                successMessage: `Login effettuato con successo, il tuo token è: ${dataResult.token}`,
                showError: false,
                errorMessage: ""
            })
        } else {
            this.setState({
                showSuccess: false,
                successMessagge: '',
                showError: true,
                errorMessage: `Login fallito, ${dataResult.error.toLowerCase()}`
            })
        }
    }

   
    getMessage = () => {
        if (this.state.showSuccess) {
            return (
                <div style={{ color: 'green' }}>
                    {this.state.successMessage}
                </div>
            );
        } else {
            return (
                <div style={{ color: 'red' }}>
                    {this.state.errorMessage}
                </div>
            );
        }
    }

    render() {
        var message = this.getMessage();

        return (
            <div style={{ marginTop: "100px", minHeight: "70vh" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-6 mr-auto ml-auto">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name='username'
                                        className="form-control"
                                        placeholder="username"
                                        value={this.state.username}
                                        onChange={this.changeText}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name='password'
                                        className="form-control"
                                        placeholder="password"
                                        value={this.state.password}
                                        onChange={this.changeText}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary pull-right"
                                    onClick={() => this.login()}

                                >
                                    Invio
								</button>
                                {message}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
