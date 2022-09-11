import React, { Component } from "react";
import Operan from "./Operan";

export default class StateProps extends Component {
    constructor(props){
        super(props)
        this.state = {
            food: "Roti"
        }
    }

    setFood = (food) => {
        this.setState({
            food: food
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.food}</h1>
                <button onClick={() => this.setFood("Apel")}>Change</button>
                <Operan food={this.state.food} setFood={this.setFood}/>
            </div>
        )
    }
}