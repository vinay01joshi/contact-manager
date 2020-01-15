import React, { Component } from 'react'

class Playground extends Component {

    state = {
        title : '',
        body : ''
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => this.setState({
                title : data.title,
                body : data.body
            }));
    }

    /*
    componentWillMount() {
        console.log('Lifcycle Method componentWillMount');
    }

    componentDidUpdate() {
        console.log('Lifcycle Method componentDidUpdate');
    }

    componentWillUpdate() {
        console.log('Lifcycle Method componentDidUpdate');
    }

    componentWillReceiveProps(nextProps, nextState) {
        console.log('componentWillReceiveProps')
    }

    getSnapshotBeforeUpdate(prevProps, prevState ) {
        
    }*/
 
    render() {
        const {title,body}  = this.state;
        console.log('Lifecycle method render');
        return (
            <div>
                <h1> {title} </h1>
                <p>{body}</p>
            </div>
        )
    }
}

export default Playground;
