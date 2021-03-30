import React, { Component } from 'react'

export class MiniForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            pwd:"",
            isLoggedOf:false
        }
    }
    handleChangeName = (e) => {
        this.setState({
            name:e.target.value
        })
    }
    handleChangePwd = (e) => {
        this.setState({
            pwd:e.target.value
        })
    }
    handleSubmit = () => {
        this.setState({
            isLoggedOf:true
        })
    }
    handleLogout = () => {
        this.setState({
            isLoggedOf:false,
            name:"",
            pwd:""
        })
    }
    render() {
        if(this.state.isLoggedOf)
        {
            return (
            <div>
                <h1>Hello, {this.state.name}</h1><br></br>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        )}
        else{
            return (
                <div className="elsediv">
                    <form onSubmit={this.handleSubmit}>
                        <label>UserName: </label><br></br>
                        <input text="text" value={this.state.name} onChange={this.handleChangeName} required></input><br></br>
                        <label>Password:  </label><br></br>
                        <input type="password" value={this.state.pwd} onChange={this.handleChangePwd}></input><br></br><br></br>
                        <input type="submit" value="Log In"></input>
                    </form>
                </div>
            )
        }
    }
}

export default MiniForm
