
import React from 'react';

export default class Classcpt extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increaseBtn = () => {
        this.setState({count: this.state.count + 1});
    }

    resetBtn = () => {
        this.setState({count: 0});
    }

    render() {
        return(
            <>
                <h2>Class component</h2>
                <button onClick={this.increaseBtn}>+1</button>
                <button onClick={this.resetBtn}>Reset</button>
                <h3>Count: {this.state.count}</h3>
            </>
        )
    }
}