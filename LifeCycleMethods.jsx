import React, { Component } from 'react'

export class LifeCycleMethods extends Component {
    constructor(props){
        super(props);
        var present=new Date();
        this.state={
            color:"red",
            name:"Vamsi",
            Hours:present.getHours(),
            Minutes:present.getMinutes(),
            Seconds:present.getSeconds(),
            Team:"RCB"
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {color: props.color };
    }

    componentDidMount(){
        setTimeout(()=>this.setState({
            name:"Krishna",
        }),3000)
        setInterval(()=>{
            var present=new Date();
            this.setState({Hours:present.getHours(),Minutes:present.getMinutes(),Seconds:present.getSeconds()})
        },3000)
    }
    
    shouldComponentUpdate() {
        return true;
      }

    changeTeam = () => {
        this.setState({Team:"CSK"});
      }

    componentDidUpdate() {
        document.getElementById("mydiv").innerHTML =
        "Example of ComponentDidUpdate  ==> My favorite Team is " + this.state.Team;
    }
    render() {
        return (
            <div>
                <div className="Mounting">
                    <h1>Example of SetDerviedStateProps: color({this.state.color})</h1>
                    <h1>Hello, {this.state.name}</h1>
                    <h1>Time: {this.state.Hours} : {this.state.Minutes} : {this.state.Seconds}</h1>
                </div>
                <div className="Updating">
                        <h2 onClick={this.changeTeam}>Example of ShouldComponentUpdate   ==> (Favourite Team:{this.state.Team})</h2>
                        <h2 id="mydiv"></h2>
                </div>
            </div>
        )
    }
}

export default LifeCycleMethods
