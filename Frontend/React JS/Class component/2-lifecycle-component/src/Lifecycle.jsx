import React, { Component } from 'react'
import Sublifecycle from './Sublifecycle';

export default class Lifecycle extends Component {

    constructor(props){
        super(props);
        this.state = {
            makanan: "Roti",
            data: {},
            tampilSublifecycle: false,
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                this.setState( {
                    data: json
                })
            })
    }

    setMakanan = (value) => {
        this.setState({
            makanan: value
        })
    }

    render() {
        return (
            <>
                <div>{this.state.makanan}</div>

                <button onClick={() => this.setState({tampilSublifecycle: !this.state.tampilSublifecycle})}>Tampilkan</button>
                {this.state.tampilSublifecycle && <Sublifecycle setMakanan={this.setMakanan}/>}
            </>
        )
    }
}
