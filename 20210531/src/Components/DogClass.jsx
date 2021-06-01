import React from 'react';
import './Dog.css';

export default class DogClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dogs1: [],
            dogs2: [],
            dogs3: [],
        };
    }

    componentDidMount() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => this.setState({dogs1: data}))
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => this.setState({dogs2: data}))
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => this.setState({dogs3: data}))
    }

    render() {
        return(
            <>
                <h1>Class</h1>
                <img src={this.state.dogs1.message} className='dog' alt='wan1' />
                <img src={this.state.dogs2.message} className='dog' alt='wan1' />
                <img src={this.state.dogs3.message} className='dog' alt='wan1' />
            </>
        )
    }
}