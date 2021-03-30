import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name:""
        }
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleSubmit = (e) => {
        alert(`Hello ${this.state.name}`);
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                <label>Enter Your Name: </label>
                <input value={this.state.name} onChange={this.handleChange}></input><br></br>
                <input type="submit" value="submit"></input><br></br>
                <label>Select your favourite cricket player among the options: </label>
                <select value={this.state.name} onChange={this.handleChange}>
                    <option></option>
                    <option>Virat Kohli</option>
                    <option>Dhoni</option>
                    <option>Yuvaraj Singh</option>
                    <option>Shewag</option>
                </select>
            </div>
            </form>
        )
    }
}

export default ControlledForm