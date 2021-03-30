import React, { Component } from 'react'
class BindingEventHandler extends Component {
    constructor(props){
        super(props);
        this.state={
            message:"Before Method is Clicked"
        }
        this.method1=this.method1.bind(this);
    }
    method1(){
        this.setState({
                message : "After Button Is Clicked(Method 1)"
            })
    }
    method2(){
        this.setState(
            {
                message : "After Button Is Clicked(Method 2)"
            }
        )
    }
    method3(){
        this.setState(
            {
                message : "After Button Is Clicked(Method 3)"
            }
        )
    }
    method4 = () => {
        this.setState(
            {
                message:"After Button Is Clicked(Method 4)"
            }
        )
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.method1}>Method 1</button><br></br>
                <button onClick={this.method2.bind(this)}>Method 2</button><br></br>
                <button onClick={ () => this.method3()}>Method 3</button><br></br>
                <button onClick={this.method4}>Method 4</button><br></br>
            </div>
        )
    }
}
export default BindingEventHandler

