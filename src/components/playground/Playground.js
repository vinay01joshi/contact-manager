import React, { Component } from 'react'

class Playground extends Component {

    state = {
        test : 'text'
    }

    componentDidMount() {
        console.log('Lifcycle Method componentDidMount');
    }

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

    }
 
    render() {
        console.log('Lifecycle method render');
        return (
            <div>
                <h1> Playground Component </h1>
            </div>
        )
    }
}

export default Playground;
