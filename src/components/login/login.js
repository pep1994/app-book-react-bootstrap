import React, { Component } from 'react'

class Login extends Component {
    constructor (props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }
    changeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    onSubmit = e => {
        e.preventDefault()
        
        
    }
    login () {
        console.log(this.state.username, this.state.password);
    }
    render() {
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
                                        value = {this.state.username}
                                        onChange = {this.changeUsername}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name='password'
                                        className="form-control"
                                        placeholder="password"
                                        value = {this.state.password}
                                        onChange = {this.changePassword}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary pull-right"
                                    onClick = {() => this.login()}

                                >
                                    Invio
								</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
